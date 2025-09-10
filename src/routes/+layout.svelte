<script lang="ts">
	import '../app.css';
</script>

<slot />
<footer class="footer footer-center bg-base-300 text-base-content p-4 sticky top-[100vh]">
	<aside>
		<p>
			Status page
			<a href="https://www.seeweb.it/">Seeweb </a> 2025
		</p>
	</aside>
</footer>

<style lang="postcss">
	a {
		@apply text-primary link hover:text-secondary;
	}
</style>
