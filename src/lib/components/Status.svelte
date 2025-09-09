<script lang="ts">
  import { StatusCode, type Status } from '$lib/types';

  export let name: string;
  export let statuses: Status[];

  const days = (a: Date, b: Date) =>
    Math.ceil(Math.abs(+a - +b) / (1000 * 60 * 60 * 24)) + 1;

  let message = 'Lacking historical data';
  let lastStatus: Status = { status: StatusCode.ERROR, date: new Date() };

  if (statuses.length > 0) {
    lastStatus = statuses.at(-1)!;
    const up = Math.floor(
      (statuses.reduce((acc, s) => acc + (s.status === StatusCode.OK ? 1 : 0), 0) / statuses.length) * 100
    );
    message = `Uptime in last ${days(statuses[0].date, lastStatus.date)} days: ${up}%`;
  }

  // columns: responsive + capped, so it always forms a tidy grid
  const colsSm  = Math.min(28, statuses.length);
  const colsMd  = Math.min(42, statuses.length);
  const colsLg  = Math.min(60, statuses.length);
</script>

<section class="container p-5 my-6 rounded-md shadow-sm border border-black/5 bg-white">
  <div class="flex items-start justify-between gap-4">
    <div class="flex items-center gap-3">
      <div class="circle {lastStatus.status === StatusCode.OK ? 'green' : lastStatus.status === StatusCode.ERROR ? 'red' : 'sunglow'}"></div>
      <h3 class="text-lg font-semibold">{name}</h3>
    </div>
    <p class="text-sm text-secondary-dark">{message}</p>
  </div>

  <!-- Squares grid -->
  <div class="mt-4">
    <div
      class="grid gap-[3px]"
      style="grid-template-columns: repeat({colsSm}, minmax(0, 1fr));"
    >
      {#each statuses as { status, date }, i}
        <div
          title={date.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}
          class="h-3 rounded-[3px] transition-transform duration-150 hover:scale-[1.06]"
          class:bg-green-600={status === StatusCode.OK}
          class:bg-[color:#FFD200]={status === StatusCode.UNSTABLE}
          class:bg-red-600={status === StatusCode.ERROR}
        />
      {/each}
    </div>

    <!-- bump columns at md / lg for nicer aspect -->
    <style>
      @media (min-width: 768px) {
        section :global(.grid) { grid-template-columns: repeat({colsMd}, minmax(0, 1fr)) !important; }
      }
      @media (min-width: 1024px) {
        section :global(.grid) { grid-template-columns: repeat({colsLg}, minmax(0, 1fr)) !important; }
      }
    </style>
  </div>
</section>
