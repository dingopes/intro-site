import { API_KEY } from '$env/static/private';
import type { PageLoad } from './$types';
export async function load({ fetch, params }) {
	try {
		const url = `https://api.polygon.io/v2/aggs/ticker/${params.stock}/range/1/day/2023-01-09/2023-01-09?apiKey=${API_KEY}`;
		const response = await fetch(url);
	} catch (e) {}
}
