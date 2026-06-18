import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { DISCIPLINES } from '../../data/content';

export default function Disciplines() {
  return (
    <section className="bg-ink-black circuit py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Sports" title="Competition Disciplines" className="mb-12" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {DISCIPLINES.map((d) => (
            <article
              key={d.name}
              className="group rounded-2xl overflow-hidden bg-ink-card border border-ink-border transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Placeholder image area — swap `background` for the Figma photo export */}
              <div className="h-44 relative" style={{ background: d.gradient }}>
                <span className="absolute inset-0 grid place-items-center text-white/25 text-xs px-2 text-center">
                  [ {d.name.replace('\n', ' ')} image ]
                </span>
              </div>
              <div className="py-4 px-2 text-center">
                <p className="font-body font-bold text-[15px] sm:text-lg leading-tight whitespace-pre-line">
                  {d.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
