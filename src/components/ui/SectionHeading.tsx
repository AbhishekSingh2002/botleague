interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  align?: 'left' | 'center';
  subtitle?: string;
  className?: string;
}

/** Eyebrow + display title used at the top of most sections. */
export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  subtitle,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="h-display text-3xl sm:text-4xl lg:text-[2.7rem]">{title}</h2>
      {subtitle && <p className="text-muted mt-3 text-lg">{subtitle}</p>}
    </div>
  );
}
