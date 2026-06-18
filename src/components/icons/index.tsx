import type { SVGProps } from 'react';
import type { IconName } from '../../data/content';

type IconProps = SVGProps<SVGSVGElement>;

/* ---- Logo gear (the "O" in BOT) ---- */
export const GearIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden {...p}>
    <circle cx="12" cy="12" r="4.2" />
    <g strokeLinecap="round">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </g>
  </svg>
);

/* ---- User-journey icons ---- */
const Tools = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z" />
    <path d="M9 15l-3 3" />
  </svg>
);
const Monument = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c1.3 1.4 2 2.6 2 3.8 0 1-.9 1.7-2 1.7s-2-.7-2-1.7C10 5.6 10.7 4.4 12 3z" />
    <path d="M7 11c0-1.5 2.2-2.5 5-2.5S17 9.5 17 11" />
    <rect x="6" y="11" width="12" height="9" rx="1" />
    <path d="M10 20v-3.5a2 2 0 1 1 4 0V20M4 20h16" />
  </svg>
);
const Podium = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...p}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.3 2.7 3 .4-2.2 2.1.5 3-2.6-1.4-2.6 1.4.5-3-2.2-2.1 3-.4L12 3z" />
    <path d="M6 20v-6h4v6M14 20v-9h4v9M4 20h16" />
  </svg>
);
const People = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <circle cx="9" cy="8" r="3" />
    <circle cx="16" cy="9" r="2.4" />
    <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5v.5h-11V19z" />
    <path d="M14.5 19.5c0-2.3 1-3.9 2.5-4.4 2.3.2 4 2.1 4 4.4v.5h-6.5z" />
  </svg>
);

/* ---- League-advantage icons ---- */
const Medal = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M9 2l3 5 3-5h-6z" fill="none" stroke="currentColor" strokeWidth={1.6} />
    <path d="M7.5 2l1.7 5M16.5 2l-1.7 5" />
    <circle cx="12" cy="15" r="6" />
    <path d="M12 12.2l.9 1.8 2 .3-1.4 1.4.3 2-1.8-1-1.8 1 .3-2L9.1 14.3l2-.3.9-1.8z" fill="#191919" />
  </svg>
);
const Gavel = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...p}>
    <path d="M14 3l7 7M11 6l4 4M5 21h8M3 17l8-8M9.5 4.5l4 4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 13l4 4" />
  </svg>
);
const Briefcase = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
  </svg>
);
const Bolt = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...p}>
    <path d="M13 2L5 14h6l-1 8 8-12h-6l1-8z" strokeLinejoin="round" />
  </svg>
);

/* ---- Category icons ---- */
const Makers = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...p}>
    <circle cx="12" cy="12" r="11" />
    <path d="M7 16V8l2.5 4L12 8l2.5 4L17 8v8" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);
const Bulb = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...p}>
    <path d="M9 18h6M10 21h4M12 2a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.2V15h6v-.3c0-.8.4-1.6 1-2.2A6 6 0 0 0 12 2z" />
    <path d="M5 5L3.5 3.5M19 5l1.5-1.5M3 11H1M23 11h-2" />
  </svg>
);
const Engineer = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <circle cx="8" cy="6" r="3" />
    <path d="M3 19c0-3 2.2-5 5-5s5 2 5 5v1H3z" />
    <circle cx="17" cy="8" r="2.6" fill="none" stroke="currentColor" strokeWidth={1.7} />
    <circle cx="20" cy="13" r="2" fill="none" stroke="currentColor" strokeWidth={1.7} />
  </svg>
);
const RoboMind = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...p}>
    <path d="M16 21v-3a6 6 0 1 0-9-5.2V21" />
    <path d="M16 21h-2M7 21H5" />
    <path d="M11 8.5h1.6M11.8 7v3M11 11.5h1.6" />
  </svg>
);

const REGISTRY: Record<IconName, (p: IconProps) => JSX.Element> = {
  tools: Tools,
  monument: Monument,
  podium: Podium,
  people: People,
  medal: Medal,
  gavel: Gavel,
  briefcase: Briefcase,
  bolt: Bolt,
  makers: Makers,
  bulb: Bulb,
  engineer: Engineer,
  robomind: RoboMind,
};

/** Resolve an icon by name from the data layer. */
export function Icon({ name, ...props }: { name: IconName } & IconProps) {
  const Cmp = REGISTRY[name];
  return <Cmp aria-hidden {...props} />;
}

/* ---- Social icons (footer) ---- */
export const YoutubeIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...p}>
    <rect x="2" y="6" width="20" height="12" rx="4" />
    <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
  </svg>
);
export const InstagramIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
export const FacebookIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
  </svg>
);
export const TwitterIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.8 3.6A11.4 11.4 0 0 1 3.8 4.5a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.8-.5a4 4 0 0 0 3.2 4c-.5.1-1 .2-1.6.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 17.9a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.5-1.3 2-2z" />
  </svg>
);

/* ---- Ecosystem line-art (What is BotLeague) ---- */
export const EcosystemArt = (p: IconProps) => (
  <svg viewBox="0 0 340 300" fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden {...p}>
    <rect x="14" y="34" width="92" height="74" rx="4" />
    <path d="M22 50h60M22 62h44M22 74h52M22 86h40" />
    <circle cx="170" cy="150" r="46" />
    <circle cx="170" cy="150" r="60" strokeDasharray="3 5" />
    <path d="M150 150c8-14 22-14 30 0-8 14-22 14-30 0z" />
    <circle cx="290" cy="60" r="26" />
    <path d="M290 44v-8M290 84v8M270 60h-8M310 60h8M276 46l-6-6M304 74l6 6M304 46l6-6M276 74l-6 6" />
    <circle cx="290" cy="60" r="7" />
    <circle cx="296" cy="220" r="13" />
    <path d="M291 220h10M296 215v10" />
    <rect x="22" y="208" width="74" height="50" rx="4" />
    <path d="M46 208v-8h26v8M22 226h74" />
    <path d="M106 70h40M170 96V70M170 204v34M214 150h22M104 150h22M126 226h44M214 90l40-30M214 210l40 30" />
  </svg>
);
