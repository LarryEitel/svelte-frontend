<script lang="ts">
	import { ListboxOption } from '@rgossiaux/svelte-headlessui';
	import IconCheck from '~icons/ph/check-bold';
	import { _ } from 'svelte-i18n';

	export let skeleton = false;
	export let value: string | number = '';
</script>

<ListboxOption
	{value}
	let:selected
	class={`${
		skeleton ? 'cursor-wait' : 'cursor-pointer'
	} flex items-center justify-between p-2 hover:bg-secondary-content/50 hover:text-secondary`}
>
	{#if skeleton}
		<div class="h-4 w-full animate-pulse rounded-md bg-base-content/20" />
	{:else if selected}
		<span class="pr-2 font-semibold">
			<slot />
		</span>
		<IconCheck width="22px" height="22px" />
	{:else}
		<slot />
	{/if}
</ListboxOption>
