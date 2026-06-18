import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Centered page shell with responsive gutters. */
export default function Container({ children, className = '' }: ContainerProps) {
  return <div className={`shell ${className}`}>{children}</div>;
}
