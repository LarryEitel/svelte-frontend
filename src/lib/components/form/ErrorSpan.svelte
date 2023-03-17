<script lang="ts">
	import { _ } from 'svelte-i18n';

	export let error = '';
	export let id: string;
</script>

{#if Boolean(error)}
	<span class="mb-2 h-2 text-xs font-medium text-error" data-testid={`${id}-error`}>
		{$_(error)}
	</span>
{/if}
