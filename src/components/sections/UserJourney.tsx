import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { Icon } from '../icons';
import { JOURNEY_STEPS } from '../../data/content';

export default function UserJourney() {
  return (
    <section className="bg-ink-black py-16 lg:py-24">
      <Container className="text-center">
        <SectionHeading
          eyebrow="User Journey"
          title="Your Path To The League"
          align="center"
          subtitle="Lorem Ipsum Lorem Ipsum Lorem Ipsum"
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 relative">
          {JOURNEY_STEPS.map((s, i) => (
            <div key={s.step} className="flex flex-col items-center relative">
              {/* connector line (hidden on the last step and on mobile) */}
              {i < JOURNEY_STEPS.length - 1 && (
                <div className="hidden lg:block journey-line absolute top-[58px] left-1/2 w-full h-[3px]" />
              )}
              <div className="journey-ring relative z-10 w-[118px] h-[118px] rounded-full flex items-center justify-center">
                <Icon name={s.icon} className="w-11 h-11 text-white" />
              </div>
              <div className="journey-tick w-px h-7 mt-2" />
              <p className="font-display text-brand-red mt-3 text-sm">{s.step}</p>
              <p className="font-body font-bold text-lg mt-1.5 uppercase leading-tight whitespace-pre-line">
                {s.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
