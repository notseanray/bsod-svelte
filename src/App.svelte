<script lang="ts">
import TailwindCss from './TailwindCSS.svelte';
import Navbar from './Navbar.svelte';
import svelteLogo from './assets/svelte.svg'
import { Router } from 'svelte-router-spa'
import { routes } from './routes.ts';
</script>

<Navbar />
<div class="pb-24" />
<header>
    <Router {routes} />
</header>
