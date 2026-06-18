import Container from '../ui/Container';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { UPCOMING_EVENTS, PAST_RESULTS } from '../../data/content';

/** Single-elimination bracket graphic for the LIVE NOW card. */
function Bracket() {
  // Coordinate system sized to fit inside the card (≈340px wide).
  const seeds = [
    { l: 0, t: 8 },
    { l: 0, t: 70 },
    { l: 0, t: 150 },
    { l: 0, t: 212 },
    { l: 126, t: 39 },
    { l: 126, t: 181 },
    { l: 252, t: 110 },
  ];
  const lines = [
    { l: 88, t: 26, w: 19, h: 2 },
    { l: 88, t: 88, w: 19, h: 2 },
    { l: 107, t: 26, w: 2, h: 64 },
    { l: 107, t: 57, w: 19, h: 2 },
    { l: 88, t: 168, w: 19, h: 2 },
    { l: 88, t: 230, w: 19, h: 2 },
    { l: 107, t: 168, w: 2, h: 64 },
    { l: 107, t: 199, w: 19, h: 2 },
    { l: 214, t: 57, w: 19, h: 2 },
    { l: 214, t: 199, w: 19, h: 2 },
    { l: 233, t: 57, w: 2, h: 144 },
    { l: 233, t: 128, w: 19, h: 2 },
  ];
  return (
    <div className="relative h-[248px] w-[340px] max-w-full">
      {seeds.map((s, i) => (
        <div key={`s${i}`} className="seed w-[88px] absolute" style={{ left: s.l, top: s.t }} />
      ))}
      {lines.map((ln, i) => (
        <div key={`l${i}`} className="bk-line" style={{ left: ln.l, top: ln.t, width: ln.w, height: ln.h }} />
      ))}
    </div>
  );
}

export default function Competitions() {
  return (
    <section className="bg-vignette-red py-16 lg:py-20">
      <Container>
        <SectionHeading title="Competitions & Events" className="mb-10" />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* LIVE NOW */}
          <div>
            <h3 className="eyebrow mb-4">Live Now</h3>
            <div className="card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-body font-bold text-xl">Bengaluru Regionals</p>
                  <p className="text-muted mt-1">Lorem Ipsum</p>
                </div>
                <span className="text-xs font-semibold text-brand-red bg-brand-red/15 border border-brand-red/40 rounded-md px-2.5 py-1">
                  Ongoing
                </span>
              </div>
              <div className="h-px bg-white/10 my-5" />
              <Bracket />
            </div>
          </div>

          {/* UPCOMING */}
          <div>
            <h3 className="eyebrow-white mb-4">Upcoming</h3>
            <div className="space-y-6">
              {UPCOMING_EVENTS.map((ev) => (
                <article key={ev.city} className="card p-6">
                  <p className="font-body font-bold text-xl mb-4">{ev.city}</p>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <p className="font-semibold">Date</p>
                      <p className="text-muted">{ev.date}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted">{ev.location}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Category</p>
                      <p className="text-muted">{ev.category}</p>
                    </div>
                  </div>
                  <Button variant="primary" className="w-full mt-5 py-3 text-base">
                    REGISTER
                  </Button>
                </article>
              ))}
            </div>
          </div>

          {/* PAST RESULTS */}
          <div>
            <h3 className="eyebrow-white mb-4">Past Results</h3>
            <div className="card p-6 divide-y divide-white/10">
              {PAST_RESULTS.map((r, i) => (
                <div key={i} className={i === 0 ? 'pb-5' : i === PAST_RESULTS.length - 1 ? 'pt-5' : 'py-5'}>
                  <p className="font-body font-bold text-xl">{r.title}</p>
                  <p className="text-muted mt-1">{r.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
