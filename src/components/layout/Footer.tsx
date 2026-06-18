import Container from '../ui/Container';
import { NAV_LINKS } from '../../data/content';
import { YoutubeIcon, InstagramIcon, FacebookIcon, TwitterIcon } from '../icons';

const SOCIALS = [
  { label: 'YouTube', Icon: YoutubeIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
];

export default function Footer() {
  return (
    <footer className="bg-ink-black border-t border-white/10">
      <Container className="py-12 flex flex-col sm:flex-row justify-between gap-10">
        <div>
          <h4 className="font-body font-bold text-lg tracking-wide mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-muted">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:text-right">
          <h4 className="font-body font-bold text-lg tracking-wide mb-4 sm:text-center">SOCIAL MEDIA</h4>
          <div className="flex gap-5 text-muted-soft">
            {SOCIALS.map(({ label, Icon }) => (
              <a key={label} href="#" aria-label={label} className="hover:text-white transition">
                <Icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
      </Container>
      <Container className="pb-8 text-xs text-muted-dim">© 2025 BOT LEAGUE. All rights reserved.</Container>
    </footer>
  );
}
