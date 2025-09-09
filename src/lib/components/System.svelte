<script lang="ts">
  import { StatusCode, type Status } from '$lib/types';

  export let systems: Array<[string, Status[]]>;

  const lastState = systems.map(([, status]) => status.at(-1));
  let systemState: StatusCode;

  if (lastState.every((s) => s?.status === StatusCode.OK)) systemState = StatusCode.OK;
  else if (lastState.every((s) => s?.status === StatusCode.ERROR)) systemState = StatusCode.ERROR;
  else systemState = StatusCode.UNSTABLE;

  let systemMessage = 'System problem';
  if (systemState === StatusCode.OK) systemMessage = 'All systems operational';
  if (systemState === StatusCode.ERROR) systemMessage = 'Total outage';
  if (systemState === StatusCode.UNSTABLE) systemMessage = 'Partial outage';

  const lastUpdate = [...lastState].sort((a, b) => (a ? +a.date : 0) - (b ? +b.date : 0));
</script>

<section class="mx-auto max-w-6xl">
  <div class="p-5 my-6 rounded-md shadow-sm border border-black/5 bg-white">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="circle {systemState === StatusCode.OK ? 'green' : systemState === StatusCode.ERROR ? 'red' : 'sunglow'}"></div>
        <h2 class="text-lg font-semibold">{systemMessage}</h2>
      </div>
      <div class="text-sm text-secondary-dark">
        Last update
        {lastUpdate[0]?.date.toLocaleDateString('en-US', {
          month: 'long',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>
    </div>
  </div>
</section>
