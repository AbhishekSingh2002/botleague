import Container from '../ui/Container';
import { SPONSORS } from '../../data/content';

/** Simple grayscale placeholder marks until the real sponsor logos are dropped in. */
function SponsorMark({ kind }: { kind: string }) {
  const base = 'w-16 h-16 grid place-items-center text-white/40 text-xs shrink-0';
  switch (kind) {
    case 'circle':
      return <span className={`${base} rounded-full border border-white/25`}>NIT</span>;
    case 'ring':
      return <span className={`${base} rounded-full border border-white/25`}>◎</span>;
    case 'gear':
      return <span className={`${base} rounded-full border border-white/15`}>⚙</span>;
    case 'bot':
      return <span className={`${base} border border-white/15 rounded`}>🤖</span>;
    case 'wing':
      return <span className={`${base} border border-white/15 rounded`}>▽</span>;
    case 'general':
      return <span className="text-white/40 text-sm shrink-0">General Robotics</span>;
    default:
      return <span className={base} />;
  }
}

export default function Sponsors() {
  return (
    <section className="bg-ink-black pt-4 pb-16">
      <Container>
        <h2 className="h-display text-2xl sm:text-3xl mb-10">Sponsors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-12 text-muted-soft">
          {SPONSORS.map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <SponsorMark kind={s.mark} />
              <span className="font-bold text-lg leading-tight whitespace-pre-line">{s.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
