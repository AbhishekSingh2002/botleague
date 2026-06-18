import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/*
        Placeholder atmosphere for the Figma arena photo. To use the real export,
        replace these two layers with:
        <img src="/assets/hero-arena.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
      */}
      <div className="hero-bg absolute inset-0" />
      <div className="hero-floor absolute inset-0" />

      <Container className="relative py-16 sm:py-20 lg:py-24 min-h-[480px] lg:min-h-[520px] flex flex-col justify-center">
        {/* Live badge */}
        <div className="absolute right-5 sm:right-8 lg:right-16 top-6">
          <div className="inline-flex items-center gap-2 rounded-md bg-black/70 border border-white/10 px-4 py-2 text-[13px]">
            <span className="flex items-center gap-1.5 text-brand-red font-bold">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-livePulse" />
              LIVE
            </span>
            <span className="text-white/80">: Episode 14 · Bengaluru Regionals</span>
            <a href="#" className="text-brand-red font-bold ml-1 hover:underline">
              WATCH LIVE
            </a>
          </div>
        </div>

        <h1 className="h-display text-white text-[2rem] sm:text-[2.7rem] lg:text-[3.8rem] leading-[1.08] lg:leading-[1.05] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          India's Ultimate
          <br />
          Robotics Arena
        </h1>

        <p className="mt-5 max-w-md text-lg sm:text-xl font-bold text-white/95">
          Build.Compete.Rank.The National Ecosystem for Robotics Arena
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button as="a" variant="primary" className="px-7 py-3.5 text-sm tracking-wide">
            CREATE ACCOUNT
          </Button>
          <Button as="a" variant="outline" className="px-7 py-3.5 text-sm tracking-wide bg-black/30">
            EXPLORE EVENTS
          </Button>
        </div>
      </Container>
    </section>
  );
}
