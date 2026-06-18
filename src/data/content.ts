/**
 * Single source of truth for page copy & structured content.
 * Keeping data here makes the section components thin and reusable.
 */

export const NAV_LINKS = ['Events', 'Programs', 'Community', 'Ranks'] as const;

export interface EventInfo {
  city: string;
  date: string;
  location: string;
  category: string;
}

export const UPCOMING_EVENTS: EventInfo[] = [
  { city: 'Event in Mumbai', date: '11/11/25', location: 'BKC', category: 'Lorem' },
  { city: 'Event in Delhi', date: '11/11/25', location: 'BKC', category: 'Lorem' },
];

export const PAST_RESULTS = [
  { title: 'Bengaluru Regionals', subtitle: 'Lorem Ipsum' },
  { title: 'Bengaluru Regionals', subtitle: 'Lorem Ipsum' },
  { title: 'Bengaluru Regionals', subtitle: 'Lorem Ipsum' },
];

export type IconName =
  | 'tools'
  | 'monument'
  | 'podium'
  | 'people'
  | 'medal'
  | 'gavel'
  | 'briefcase'
  | 'bolt'
  | 'makers'
  | 'bulb'
  | 'engineer'
  | 'robomind';

export interface JourneyStep {
  step: string;
  title: string;
  icon: IconName;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  { step: 'STEP 1', title: 'Build Your\nTeam', icon: 'tools' },
  { step: 'STEP 2', title: 'Compete Across\nIndia', icon: 'monument' },
  { step: 'STEP 3', title: 'Earn National\nRanking & Value', icon: 'podium' },
  { step: 'STEP 4', title: 'Join The\nLeague', icon: 'people' },
];

export const WHAT_IS_ITEMS = [
  { n: '1.', title: 'Structured Events', text: '"From one-off events to a year-round competitive season."' },
  { n: '2.', title: 'Digital Identity', text: '"Your professional robotics legacy, tracked and verified."' },
  { n: '3.', title: 'National Ranking', text: '"Benchmark your skills against the best engineers in India."' },
  { n: '4.', title: 'Career Pathway', text: '"Turning arena victories into real-world industry opportunities."' },
];

export interface Category {
  title: string;
  subtitle: string;
  icon: IconName;
  highlighted?: boolean;
}

export const CATEGORIES: Category[] = [
  { title: 'Mini\nMakers', subtitle: 'Where Creativity Meets Logic.', icon: 'makers', highlighted: true },
  { title: 'Junior\nInnovators', subtitle: 'Engineering & Strategy Fundamentals.', icon: 'bulb' },
  { title: 'Young\nEngineers', subtitle: 'Advanced Wireless & Autonomous Control.', icon: 'engineer' },
  { title: 'Robo\nMinds', subtitle: 'Elite Professional Sports & Robotics.', icon: 'robomind' },
];

export interface Discipline {
  name: string;
  gradient: string; // placeholder until the real Figma image export is dropped in
}

export const DISCIPLINES: Discipline[] = [
  { name: 'Robo Race', gradient: 'linear-gradient(135deg,#5a4a3a,#2b2118)' },
  { name: 'Line Follower', gradient: 'linear-gradient(135deg,#e9e9ee,#b9bcc6)' },
  { name: 'RC Racing', gradient: 'linear-gradient(135deg,#9a9a9a,#3a3a3a)' },
  { name: 'FPV Drone Racing &\nAeromodelling', gradient: 'linear-gradient(135deg,#3a4a63,#1a2330)' },
  { name: 'Robo Hockey', gradient: 'linear-gradient(135deg,#1a3a6a,#0a1424)' },
  { name: 'Robo War', gradient: 'linear-gradient(135deg,#6a4a3a,#241a14)' },
];

export interface Advantage {
  title: string;
  text?: string;
  icon: IconName;
}

export const ADVANTAGES: Advantage[] = [
  { title: 'National Recognition', icon: 'medal' },
  { title: 'Fair Judging', icon: 'gavel' },
  { title: 'Career Ops', text: '"Bridge the gap between arena victories and top-tier tech placements."', icon: 'briefcase' },
  { title: 'High - Energy Eco', text: '"Join a nationwide community of elite innovators and robotics athletes."', icon: 'bolt' },
];

export interface LeaderRow {
  rank: string;
  name: string;
  score: string;
  color: string;
}

export const LEADERBOARD_TOP = { rank: '#01 - Player Name', score: '508754' };

export const LEADERBOARD_ROWS: LeaderRow[] = [
  { rank: '02', name: 'Player Name', score: '22000', color: '#2b6bff' },
  { rank: '03', name: 'Player Name', score: '20030', color: '#2b6bff' },
  { rank: '04', name: 'Player Name', score: '19500', color: '#e0379b' },
  { rank: '05', name: 'Player Name', score: '15060', color: '#e0379b' },
  { rank: '06', name: 'Player Name', score: '13865', color: '#e0379b' },
  { rank: '07', name: 'Player Name', score: '10954', color: '#e0379b' },
  { rank: '08', name: 'Player Name', score: '9057', color: '#e0379b' },
];

export const SIGNUP_FORMS = ['Become in Judge', 'Volunteer', 'Community Member'] as const;

export const SPONSORS = [
  { name: 'NIT DELHI', mark: 'circle' },
  { name: 'INDIAN BIT', mark: 'bot' },
  { name: 'NIT SILCHAR', mark: 'ring' },
  { name: 'ROBO\nCOMPANY', mark: 'wing' },
  { name: 'IIT BOMBAY', mark: 'gear' },
  { name: 'ROBO\nCOMPANY', mark: 'general' },
];
