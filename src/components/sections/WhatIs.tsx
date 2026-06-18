import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { EcosystemArt } from '../icons';
import { WHAT_IS_ITEMS } from '../../data/content';

export default function WhatIs() {
  return (
    <section className="bg-ink-800 py-16 lg:py-24">
      <Container>
        <SectionHeading title="What is BotLeague?" className="mb-12" />

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 max-w-3xl">
            {WHAT_IS_ITEMS.map((item) => (
              <div key={item.title}>
                <p className="font-display text-brand-red text-2xl mb-2">{item.n}</p>
                <h3 className="font-body font-bold text-xl uppercase tracking-wide">{item.title}</h3>
                <p className="text-muted mt-2 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <EcosystemArt className="hidden lg:block w-[340px] h-[300px] text-white/35" />
        </div>
      </Container>
    </section>
  );
}
