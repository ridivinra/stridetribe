<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>Hello {data.name}!</h1>
<h1>My favorite parent is {data.parent}</h1>