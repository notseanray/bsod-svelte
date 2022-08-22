import Home from "./Home.svelte";
import Robot from "./Robot.svelte";
import About from "./About.svelte";
import Members from "./Members.svelte";
import Sponsors from "./Sponsors.svelte";

const routes = [
  {
    name: '/',
    component: Home,
  },
  {
    name: '/robot',
    component: Robot,
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
]

export { routes }
