<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    console.log(data.activityTypes)
</script>

<h1>Login/Register page</h1>

{#if !data.activityTypes || data.activityTypes.length === 0}
    <p>No data</p>

{:else}
    <ul>
    {#each data.activityTypes as activityType}
        <li>{activityType.name}</li>
    {/each}
    </ul>
{/if}
