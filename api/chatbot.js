const MAX_BODY_BYTES = 32 * 1024
const REQUEST_TIMEOUT_MS = 15_000

function sendJson(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return sendJson(res, 405, { error: 'Method not allowed' })
  }

  const chatbotUrl = process.env.CHATBOT_URL
  const portfolioToken = process.env.PORTFOLIO_TOKEN

  if (!chatbotUrl || !portfolioToken) {
    console.error('Chatbot proxy is missing its server-side configuration')
    return sendJson(res, 500, { error: 'Chatbot is not configured' })
  }

  let parsedUrl
  try {
    parsedUrl = new URL(chatbotUrl)
  } catch {
    console.error('Chatbot proxy has an invalid CHATBOT_URL')
    return sendJson(res, 500, { error: 'Chatbot is not configured' })
  }

  if (parsedUrl.protocol !== 'https:') {
    console.error('Chatbot proxy requires an HTTPS CHATBOT_URL')
    return sendJson(res, 500, { error: 'Chatbot is not configured' })
  }

  const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body ?? {})
  if (Buffer.byteLength(body, 'utf8') > MAX_BODY_BYTES) {
    return sendJson(res, 413, { error: 'Request body is too large' })
  }

  let payload
  try {
    payload = JSON.parse(body)
  } catch {
    return sendJson(res, 400, { error: 'Invalid JSON body' })
  }

  if (
    !payload ||
    typeof payload !== 'object' ||
    typeof payload.message !== 'string' ||
    !Array.isArray(payload.historial)
  ) {
    return sendJson(res, 400, { error: 'Invalid chatbot request' })
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const upstreamResponse = await fetch(parsedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${portfolioToken}`,
      },
      body,
      signal: controller.signal,
    })

    const responseBody = await upstreamResponse.text()
    res.status(upstreamResponse.status)
    res.setHeader('Content-Type', upstreamResponse.headers.get('content-type') ?? 'application/json')
    return res.end(responseBody)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown upstream error'
    console.error('Chatbot upstream request failed:', message)
    return sendJson(res, 502, { error: 'Chatbot upstream request failed' })
  } finally {
    clearTimeout(timeout)
  }
}
