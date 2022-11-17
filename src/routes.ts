import Home from "./Home.svelte";
import Members from "./Members.svelte";

import Powerplay from "./robots/Powerplay.svelte";
import FreightFrenzy from "./robots/FreightFrenzy.svelte";

import First from "./about/First.svelte";
import Team from "./about/Team.svelte";
import Achievements from "./about/Achievements.svelte";

import Sponsors from "./sponsors/Sponsors.svelte";
import Donate from "./sponsors/Donate.svelte";


const routes = [
  {
    name: '/',
    component: Home,
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
    name: '/sponsors/donate',
    component: Donate,
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
