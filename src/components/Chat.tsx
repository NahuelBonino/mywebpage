import {
  ArrowUp,
  Cloud,
} from 'lucide-react';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { BorderBeam } from '@/components/ui/border-beam';
import { Textarea } from '@/components/ui/textarea';

interface ChatProps {
  className?: string;
  isLoading?: boolean;
  onSend?: (message: string) => void | Promise<void>;
}

export default function Chat({ className = '', isLoading = false, onSend }: ChatProps) {
  const [inputValue, setInputValue] = useState('');
  const [isBeamActive, setIsBeamActive] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const beamTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (beamTimerRef.current) clearTimeout(beamTimerRef.current);
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = inputValue.trim();

    if (!message || isLoading) return;

    setIsBeamActive(true);
    if (beamTimerRef.current) clearTimeout(beamTimerRef.current);
    beamTimerRef.current = setTimeout(() => setIsBeamActive(false), 4000);

    await onSend?.(message);
    setInputValue('');
  };

  return (
    <BorderBeam active={isBeamActive} className={`w-[calc(42rem-5rem)] ${className}`}>
      <form className="flex min-h-[120px] cursor-text flex-col rounded-[inherit] bg-card shadow-lg" onSubmit={handleSubmit}>
        <div className="relative max-h-[258px] flex-1 overflow-y-auto">
          <Textarea
              className="min-h-[48.4px] w-full resize-none whitespace-pre-wrap break-words border-0 bg-transparent! p-3 text-[16px] text-foreground shadow-none outline-none transition-[padding] duration-200 ease-in-out focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Pregunta lo que quieras"
              ref={inputRef}
              value={inputValue}
            />
          </div>

          <div className="chat-bar flex min-h-[40px] items-center gap-2 p-2 pb-1">
            <div className="flex size-7 items-center justify-center rounded-full bg-muted">
              <Cloud className="size-4 text-muted-foreground" />
            </div>

            <div className="ml-auto flex items-center gap-1.5">
              <Button
                aria-label="Send message"
                className="button-chat rounded-full transition-[background-color,scale,opacity] active:not-disabled:scale-[0.96]"
                disabled={!inputValue.trim() || isLoading}
                size="icon-sm"
                type="submit"
              >
                {isLoading ? (
                  <span className="size-4 animate-spin rounded-full border-2 border-current/30 border-t-current" />
                ) : (
                  <ArrowUp className="size-4" />
                )}
              </Button>
            </div>
          </div>
        </form>
    </BorderBeam>
  );
}
