import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  as?: 'button' | 'a';
  href?: string;
  children: ReactNode;
}

/** Shared CTA button. Renders as <a> when `as="a"` is passed. */
export default function Button({
  variant = 'primary',
  as = 'button',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const cls = `${variant === 'primary' ? 'btn-primary' : 'btn-outline'} ${className}`;
  if (as === 'a') {
    return (
      <a href={href ?? '#'} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
