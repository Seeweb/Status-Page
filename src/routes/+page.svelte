<script lang="ts">
  import System from '$lib/components/System.svelte';
  import Status from '$lib/components/Status.svelte';
  import Incidents from '$lib/components/Incidents.svelte';

  export let data: {
    systems: Array<[string, import('$lib/types').Status[]]>;
    incidents: import('$lib/types').ReportFile['incidents'];
  };
</script>

<div>
  <System systems={data.systems} />

  {#each data.systems as [name, statuses]}
    <Status {name} {statuses} />
  {/each}

  <Incidents incidents={data.incidents} />
</div>
