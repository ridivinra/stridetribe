<script lang="ts">
  import { enhance } from "$app/forms";

    //import type { LayoutData } from './$types';
    
    //export let data: LayoutData;
</script>

<form method="POST" use:enhance>
    <button formaction="/dashboard/logout">Log out</button>
</form>
<slot></slot>