<script lang="ts">
	import { theme } from '$lib/stores';
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription
	} from '@rgossiaux/svelte-headlessui';
	import IconX from '~icons/ph/x';

	export let isOpen = false;
	export let title: string;
	export let description: string;
	export let size: 'xs' | 'sm' | 'md' | 'lg' = 'sm';
	export let close: () => void;

	const sizes = {
		xs: '26rem',
		sm: '30rem',
		md: '34rem',
		lg: '38rem'
	};
</script>

<Dialog open={isOpen} on:close={() => close()} unmount={false}>
	<DialogOverlay class="fixed inset-0 z-20 animate-slide-down bg-black/70" />

	<div
		data-theme={$theme}
		style="max-width: {sizes[size]};"
		class={`fixed top-[50%] left-[50%] z-50 flex h-full w-[95vw] -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-center bg-transparent px-12 py-8 text-base-content md:w-full`}
	>
		<div class="overflow-y-auto rounded-lg bg-base-300 p-4">
			<div class="mb-4 flex justify-between">
				<div class="flex-1" />
				<button on:click={() => close()} class="opacity-75  transition-all hover:opacity-100">
					<IconX width="28px" height="28px" />
				</button>
			</div>
			<DialogTitle class="mb-2 text-center text-lg font-semibold">{title}</DialogTitle>
			<DialogDescription class="text-center">{description}</DialogDescription>
			<slot />
		</div>
	</div>
</Dialog>
