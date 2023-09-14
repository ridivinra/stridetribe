import type { PageServerLoad } from './$types';
import { redirect, type Actions, error } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ locals }) => {
        
        const {error: err} = await locals.supabase.auth.signOut();
        if (err) {
            return error(500, err);
        }

        throw redirect(303, "/");
    }
}