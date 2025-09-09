<script lang="ts">
  import '../app.css';
</script>

<div class="min-h-screen text-primary-dark">
  <header class="sticky top-0 z-10 bg-secondary text-alabaster-50 shadow">
    <div class="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
      <h1 class="text-xl font-extrabold tracking-wide">
        <span class="text-accent">Seeweb</span> Status
      </h1>
      <nav class="text-sm opacity-80">Live monitoring &amp; incidents</nav>
    </div>
  </header>

  <main class="mx-auto max-w-6xl px-4 py-8">
    <slot />
  </main>

  <footer class="mx-auto max-w-6xl px-4 mt-16 py-6 text-sm opacity-60">
    © {new Date().getFullYear()} Seeweb — Status page
  </footer>
</div>
