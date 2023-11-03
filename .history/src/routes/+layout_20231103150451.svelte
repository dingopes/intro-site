<script>
	import { page } from '$app/stores';

	export let data;
</script>

<nav>
	<li><a data-sveltekit-preload-data href="/">Home</a></li>
	<li><a data-sveltekit-preload-data href="contact">Contact</a></li>
	<li><a data-sveltekit-preload-data href="about">about</a></li>
</nav>
<h1>{data.name}</h1>
<h2>{$page.url.pathname}</h2>
<main>
	<slot />
</main>
