import Home from "./Home.svelte";
import About from "./About.svelte";
import Members from "./Members.svelte";
import Sponsors from "./Sponsors.svelte";

import Powerplay from "./robots/Powerplay.svelte";
import FreightFrenzy from "./robots/FreightFrenzy.svelte";

import First from "./about/First.svelte";
import Team from "./about/Team.svelte";
import Achievements from "./about/Achievements.svelte";


const routes = [
  {
    name: '/',
    component: Home,
  },
  {
    name: '/about',
    component: About,
  },
  {
    name: '/members',
    component: Members,
  },
  {
    name: '/sponsors',
    component: Sponsors,
  },
  {
    name: '/about/first',
    component: First,
  },
  {
    name: '/about/team',
    component: Team,
  },
  {
    name: '/about/achievements',
    component: Achievements,
  },
  {
    name: '/robots/powerplay',
    component: Powerplay,
  },
  {
    name: '/robots/freightfrenzy',
    component: FreightFrenzy,
  },
]

export { routes }
