import Container from '../ui/Container';
import { Icon } from '../icons';
import { ADVANTAGES, LEADERBOARD_TOP, LEADERBOARD_ROWS } from '../../data/content';

function Leaderboard() {
  return (
    <div className="leaderboard circuit rounded-2xl p-6 max-w-md w-full mx-auto">
      <h3 className="h-display text-center text-xl mb-6">Leaderboard</h3>

      {/* top player */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-md bg-brand-gold lb-glow grid place-items-center">
            <svg className="w-9 h-9 text-black/80" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <circle cx="12" cy="9" r="4" />
              <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#2b3a4d] rounded grid place-items-center text-brand-gold text-[10px]">
            ★
          </span>
        </div>
        <p className="text-xs text-muted-soft mt-3">{LEADERBOARD_TOP.rank}</p>
        <p className="lb-num text-2xl text-white">{LEADERBOARD_TOP.score}</p>
      </div>

      {/* ranked rows */}
      <ul className="space-y-2.5">
        {LEADERBOARD_ROWS.map((row) => (
          <li key={row.rank} className="lb-row rounded-md flex items-center gap-3 px-3 py-2 text-sm">
            <span className="lb-num text-muted-soft text-xs w-5">{row.rank}</span>
            <span className="w-6 h-6 rounded grid place-items-center" style={{ background: row.color }}>
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
              </svg>
            </span>
            <span className="flex-1 text-white/85">{row.name}</span>
            <span className="lb-num text-white/90">{row.score}</span>
            <span style={{ color: row.color }}>⬢</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LeagueAdvantage() {
  return (
    <section className="bg-ink-black py-16 lg:py-24">
      <Container className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="eyebrow mb-3">Why Register ?</p>
          <h2 className="h-display text-3xl sm:text-4xl lg:text-[2.7rem] mb-12">The League Advantage</h2>

          <ul className="space-y-9">
            {ADVANTAGES.map((a) => (
              <li key={a.title} className="flex items-start gap-5">
                <Icon name={a.icon} className="w-9 h-9 text-brand-red shrink-0" />
                <div>
                  <h3 className="font-body font-bold text-xl uppercase">{a.title}</h3>
                  {a.text && <p className="text-muted mt-1.5 max-w-sm leading-relaxed">{a.text}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Leaderboard />
      </Container>
    </section>
  );
}
