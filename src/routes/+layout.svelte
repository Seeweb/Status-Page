<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col">
	<div class="flex-1">
		<slot />
	</div>
	<footer class="footer footer-center bg-base-300 text-base-content p-4">
		<aside>
			<p>
				Status page
				<a href="https://www.seeweb.it/" class="link !text-accent hover:!text-accent">Seeweb</a> 2025
			</p>
		</aside>
	</footer>
</div>

<style lang="postcss">
	a {
		@apply text-primary link hover:text-secondary;
	}
</style>
