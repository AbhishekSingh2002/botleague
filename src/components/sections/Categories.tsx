import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { Icon } from '../icons';
import { CATEGORIES } from '../../data/content';

export default function Categories() {
  return (
    <section className="bg-ink-800 pb-20">
      <Container>
        <SectionHeading title="Categories" className="mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => (
            <article
              key={cat.title}
              className={`rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1 ${
                cat.highlighted
                  ? 'border border-brand-gold bg-[linear-gradient(160deg,#2a2616_0%,#1c1a12_100%)]'
                  : 'card hover:border-white/20'
              }`}
            >
              <Icon name={cat.icon} className="w-14 h-14 text-brand-gold mb-8" />
              <h3 className="font-display text-lg leading-tight uppercase whitespace-pre-line">{cat.title}</h3>
              <p className="text-muted text-sm mt-3">{cat.subtitle}</p>
              <a href="#" className="arrow-link mt-6">
                Learn More <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
