<script>
  import { onMount, onDestroy } from "svelte";
const MOBILE_WIDTH = 800;
let mobile = innerWidth < MOBILE_WIDTH;
onMount(() => {
	window.addEventListener("resize", handleResize)
})
onDestroy(() => {
	window.removeEventListener("scroll", handleResize);
})
const handleResize = (e) => {
	mobile = innerWidth < MOBILE_WIDTH;
}
const debounce = (fn, interval) => {
	let timer;
	return function debounced(...args) {
		clearTimeout(timer);
		timer = setTimeout(function call() {
			fn(...args);
		}, interval);
	};
};
</script>

<div class="overflow-x-hidden">
	{#if !mobile}
		<p class="text-[40px] m-4 absolute">
			BS:(D
		</p>
		<p class="text-[16px] inline m-4 float-right">
			<a class="p-2 hover:underline" href="/"> Home</a>
			<a class="p-2 hover:underline" href="/robot"> Robot</a>
			<a class="p-2 hover:underline" href="/about"> About us</a>
			<a class="p-2 hover:underline" href="/sponsors"> Sponsors</a>
		</p>
	{:else}
		<p class="text-[40px] m-4 absolute ml-[60%]">
			BS:(D
		</p>
		<div class="text-[16px] inline m-4 content-center">
			<div class="navbar">
				<div class="container nav-container mb-10">
					<input
						class="checkbox"
						type="checkbox"
						name=""
						id=""
					/>
					<div class="hamburger-lines">
						<span class="line line1" />
						<span class="line line2" />
						<span class="line line3" />
					</div>
					<div class="menu-items font-bold">
						<a class="p-2 hover:underline" href="/"> Home</a>
						<br />
						<a class="p-2 hover:underline" href="/robot"> Robot</a>
						<br />
						<a class="p-2 hover:underline" href="/about"> About us</a>
						<br />
						<a class="p-2 hover:underline" href="/sponsors"> Sponsors</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbar .menu-items {
    z-index: 10;
    display: flex;
}
.navbar .nav-container li {
    list-style: none;
}
.navbar .nav-container a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 0.7rem;
}
.navbar .nav-container a:hover {
    font-weight: bolder;
}
.nav-container {
    display: block;
}
.nav-container .checkbox {
    position: absolute;
    display: block;
    height: 32px;
    width: 32px;
    top: 20px;
    left: 20px;
    z-index: 500;
    opacity: 0;
    cursor: pointer;
}
.nav-container .hamburger-lines {
    display: block;
    height: 26px;
    width: 32px;
    position: absolute;
    top: 17px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.nav-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #fff;
}
.nav-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
}
.nav-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
}
.nav-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
}
.navbar .menu-items {
    box-shadow: inset 00 2000px rgba(0, 0, 0, 0.8);
    margin-top: 120px;
    height: fit-content;
    width: 50%;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease-in-out;
    text-align: center;
    position: fixed;
    margin-right: 0px;
}
.navbar .menu-items li {
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
    font-weight: 500;
}
.logo {
    position: absolute;
    top: 5px;
    right: 15px;
    font-size: 1.2rem;
    color: #fff;
}
.nav-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
}
.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
}
.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
}
.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
}
.nav-container input[type="checkbox"]:checked ~ .logo {
    display: none;
}
</style>
