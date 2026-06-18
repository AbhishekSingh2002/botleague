import { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { GearIcon } from '../icons';
import { NAV_LINKS } from '../../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink-800/95 backdrop-blur border-b border-white/5">
      <Container className="flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 shrink-0" aria-label="BOT LEAGUE home">
          <span className="text-brand-gold text-xl leading-none">◤</span>
          <span className="font-display text-lg sm:text-xl tracking-tight flex items-center">
            <span className="text-[#2f6bff]">B</span>
            <GearIcon className="w-[18px] h-[18px] mx-px text-[#2f6bff]" />
            <span className="text-[#2f6bff]">T</span>
            <span className="text-brand-red ml-1.5 border-b-2 border-[#2f6bff] pb-0.5">LEAGUE</span>
          </span>
          <span className="text-brand-gold text-xl leading-none">◢</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10 font-display text-[15px] text-white/90" aria-label="Primary">
          {NAV_LINKS.map((link, i) => (
            <a key={link} href="#" className="nav-link" aria-current={i === 0 ? 'page' : undefined}>
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button as="a" variant="outline" className="px-7 py-2.5 text-sm">
            LOGIN
          </Button>
          <Button as="a" variant="primary" className="px-6 py-2.5 text-sm">
            REGISTER NOW
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-white"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} />
          </svg>
        </button>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-ink-800">
          <Container className="py-4 flex flex-col gap-1 font-display text-[15px]">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="py-2.5 text-white/90">
                {link}
              </a>
            ))}
            <div className="flex gap-3 pt-3">
              <Button as="a" variant="outline" className="flex-1 py-2.5 text-sm">
                LOGIN
              </Button>
              <Button as="a" variant="primary" className="flex-1 py-2.5 text-sm">
                REGISTER NOW
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
