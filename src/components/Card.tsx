import type { ReactNode } from 'react';

export type CardVariant = 'primary' | 'success' | 'info' | 'warning' | 'danger';

interface CardProps {
  title: string;
  subtitle?: string;
  meta?: string;
  description?: string;
  icon?: ReactNode;
  href?: string;
  variant?: CardVariant;
  accent?: string;
  children?: ReactNode;
}

export function Card({
  title,
  subtitle,
  meta,
  description,
  icon,
  href,
  variant = 'success',
  accent,
  children,
}: CardProps) {
  const className = variant === 'primary' ? 'card' : `card card--${variant}`;

  const content = (
    <>
      {icon && <div className="card__icon">{icon}</div>}

      <div className="card__content">
        <div className="card__header">
          <div className="card__header-main">
            <h3 className="card__title">{title}</h3>

            {subtitle && (
              <span className="card__subtitle" style={accent ? { color: accent } : undefined}>
                {subtitle}
              </span>
            )}
          </div>

          {meta && <span className="card__meta">{meta}</span>}
        </div>

        {description && (
          <p className="card__description">{description}</p>
        )}

        {children}
      </div>
    </>
  );

  if (href) {
    return (
      <div className={className}>
        {content}
      </div>
    );
  }

  return <article className={className}>{content}</article>;
}