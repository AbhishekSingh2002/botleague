import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Competitions from './components/sections/Competitions';
import UserJourney from './components/sections/UserJourney';
import WhatIs from './components/sections/WhatIs';
import Categories from './components/sections/Categories';
import Disciplines from './components/sections/Disciplines';
import LeagueAdvantage from './components/sections/LeagueAdvantage';
import JoinEcosystem from './components/sections/JoinEcosystem';
import Sponsors from './components/sections/Sponsors';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Competitions />
        <UserJourney />
        <WhatIs />
        <Categories />
        <Disciplines />
        <LeagueAdvantage />
        <JoinEcosystem />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
