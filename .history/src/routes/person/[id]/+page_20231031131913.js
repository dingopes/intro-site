import type { PageLoad } from './$types';

export function load({ params }) {
	return {
		id: params.id
	};
}
