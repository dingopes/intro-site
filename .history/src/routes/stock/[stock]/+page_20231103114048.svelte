<script>
	export let data;
	console.log(data, 'stock');
</script>

<h1>Stock {data.ticker}</h1>

{#if data.results / length > 0}
	<p>High Price: {data.results[0].h}</p>
	<p>Low Price: {data.results[0].l}</p>
	<p>Closing Price: {data.results[0].c}</p>
{:else}
	<p>No Stock Found</p>
{/if}
