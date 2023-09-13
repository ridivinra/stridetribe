import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        name: 'Árni',
        parent: 'mom'
    };
}) satisfies PageServerLoad;