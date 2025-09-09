<script lang="ts">
  import type { ReportFile } from '$lib/types';
  import moment from 'moment';
  export let incidents: ReportFile['incidents'];
</script>

<section class="mx-auto max-w-6xl my-10 space-y-4">
  <h2 class="text-xl font-semibold px-1">Recent incidents</h2>

  {#each incidents as incident}
    <article class="bg-white rounded-md shadow-sm border border-black/5 p-4">
      <div class="flex items-center gap-2 text-sm text-secondary-dark">
        <span class="circle {incident.open ? 'sunglow' : 'green'}"></span>
        <span>{moment.unix(incident.date).format('MMM Do, YYYY')}</span>
      </div>
      <div class="mt-2 font-medium">{incident.title}</div>
    </article>
  {/each}
</section>
