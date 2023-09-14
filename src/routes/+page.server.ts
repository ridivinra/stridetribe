// src/routes/+page.server.ts
import { redirect, fail } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import type { Provider } from '@supabase/supabase-js'
import type { Actions } from "./$types"

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
  const session = await getSession()
  console.log(session);
  // if the user is already logged in return them to the account page
  if (session) {
    throw redirect(303, '/dashboard')
  }

  return { url: url.origin }
}
const OAUTH_PROVIDERS = ["google"]

export const actions: Actions = {
	login: async ({ request, locals, url }) => {
		const provider = url.searchParams.get("provider") as Provider
        console.log(provider);
		if (provider) {
			if (!OAUTH_PROVIDERS.includes(provider)) {
				return fail(400, {
					error: "Provider not supported.",
				})
			}
			const { data, error: err } = await locals.supabase.auth.signInWithOAuth({
				provider: provider,
                options: {
                    redirectTo: `${url.origin}/auth/callback`
                }
			})

			if (err) {
				console.log(err)
				return fail(400, {
					message: "Something went wrong.",
				})
			}
            // console.log(data.url);
			throw redirect(303, data.url)
		}
		throw redirect(303, "/")
	},
}