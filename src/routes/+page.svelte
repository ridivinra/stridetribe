<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { enhance } from '$app/forms';

	//import { enhance, type SubmitFunction } from '$app/forms';
	import { supabase } from '$lib/supabase';
	import type { Provider } from '@supabase/supabase-js';

	const signInWithProvider = async (provider: Provider) => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: provider
		});
	};
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<h1>Welcome to RunningJourney</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/login">Register</a>

<form method="POST" use:enhance>
    <button formaction="?/login&provider=google" class="btn btn-ghost">Google</button>
</form>