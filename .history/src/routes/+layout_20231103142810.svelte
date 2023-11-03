<script>
	export let data;
</script>

<nav>
	<li><a href="/">Home</a></li>
	<li><a href="contact">Contact</a></li>
	<li><a href="about">about</a></li>
</nav>
<h1>{data.name}</h1>
<main>
	<slot />
</main>
