<script lang="ts">
	import { Button } from '$lib/components';
	import { _ } from 'svelte-i18n';
	import { authDialog } from '$lib/stores';
	import { page } from '$app/stores';
</script>

<div class="mx-auto flex w-full flex-col  justify-center text-secondary/80">
	<div class="flex flex-col items-center justify-center rounded-sm text-center">
		<h1 data-testid="home-h1" class="text-5xl font-semibold leading-none sm:text-6xl">
			{$_('r-home.title-1')} <br />
			<span class="text-accent dark:brightness-75">{$_('r-home.title-2')}</span>
		</h1>
		<p class="my-8 max-w-4xl text-xl sm:mb-12">{$_('r-home.subtitle')}</p>
		<div class="flex flex-col gap-2 sm:flex-row">
			{#if !$page.data.session?.user}
				<Button on:click={() => authDialog.update(() => ({ isOpen: true, context: 'signup' }))}
					>{$_('r-home.signup-now')}</Button
				>
			{/if}
			<Button variants={{ intent: 'secondary' }} to={'/activities'}>
				{$_('r-home.browse-activities')}
			</Button>
		</div>
	</div>
</div>
