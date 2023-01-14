<script lang="ts">
	import { Button } from '$lib/components';
	import { _ } from 'svelte-i18n';
</script>

<div
	class="fixed z-50 w-96 bottom-8 right-8 card bg-base-300 shadow-xl"
	data-testid="cookie-banner"
>
	<div class="card-body">
		<h2 class="card-title">{$_('cookies-notice.title')}</h2>
		<p>{$_('cookies-notice.subtitle')}</p>
		<p>
			{$_('cookies-notice.more-info')}
			<!-- <Button variants={{ intent: 'text-base' }} to={CookiesRoute}> -->
			<Button variants={{ intent: 'text-base' }} to={''}>
				{$_('terms.cookies-policy')}.
			</Button>
		</p>
		<div class="card-actions justify-end">
			<!-- <Button variants={{size: 'sm'}} data-testid="cookie-banner-btn" onClick={handleDismissBanner} size="sm"> -->
			<Button variants={{ size: 'sm' }}>
				{$_('terms.dismiss')}
			</Button>
		</div>
	</div>
</div>
