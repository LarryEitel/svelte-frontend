<script lang="ts">
	import NotFound from '$lib/assets/exceptions/404.svg';
	import NotFoundDark from '$lib/assets/exceptions/404-dark.svg';
	import GenericError from '$lib/assets/exceptions/500.svg';
	import GenericErrorDark from '$lib/assets/exceptions/500-dark.svg';
	import { theme } from '$lib/stores';
	import { _ } from 'svelte-i18n';
	import { page } from '$app/stores';
	import { Button } from '$lib/components';

	$: resolveImageByStatusCode = (status: number) => {
		switch (status) {
			case 404:
				return $theme === 'winter' ? NotFound : NotFoundDark;
			default:
				return $theme === 'winter' ? GenericError : GenericErrorDark;
		}
	};
</script>

<div class="flex h-full max-w-3xl flex-col items-center justify-center">
	<h1 data-testid="error-fallback-title" class="text-center text-3xl font-medium">
		{$_(`exceptions.status.${$page.status}.title`)}
	</h1>
	<h3 class="text-md my-4 text-center">{$_(`exceptions.status.${$page.status}.message`)}</h3>
	<img class="my-12 max-w-md" src={resolveImageByStatusCode($page.status)} alt="Error" />
	<Button to="/" variants={{ intent: 'ghost' }}>{$_('exceptions.go-back')}</Button>
</div>
