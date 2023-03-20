<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import { _ } from 'svelte-i18n';
	import { Listbox, ListboxButton, ListboxOptions } from '@rgossiaux/svelte-headlessui';
	import IconCaretDown from '~icons/ph/caret-down';
	import IconCaretUp from '~icons/ph/caret-up';
	import IconInfo from '~icons/ph/info';
	import Popover from '../popover';
	import ErrorSpan from './ErrorSpan.svelte';

	export let label = '';
	export let error = '';
	export let id: string;
	export let selected: unknown = null;
	export let buttonText = '';
	export let variants: VariantProps<typeof selectStyle> = {};
	export let info = '';

	const selectStyle = cva(
		'flex justify-between items-center text-sm w-full rounded-md text-left p-2',
		{
			variants: {
				intent: {
					primary: 'border bg-base-200 border-transparent',
					error: 'border border-error bg-base-200'
				}
			},
			defaultVariants: { intent: 'primary' }
		}
	);
</script>

<div>
	{#if Boolean(label)}
		<span class="label-text cursor-default">{label}</span>
	{/if}
	<Listbox class="w-full" value={selected} let:open on:change={(e) => (selected = e.detail)}>
		<div class="flex items-center gap-2">
			<div class="flex w-full">
				<slot name="icon" />
				<ListboxButton
					data-testid={`select-${id}-btn`}
					on:click
					class={`${selectStyle({
						...variants,
						intent: error ? 'error' : variants.intent
					})} ${$$slots.icon ? 'rounded-l-none' : ''}`}
				>
					{buttonText || selected || $_('terms.default-select')}
					{#if open}
						<IconCaretUp />
					{:else}
						<IconCaretDown />
					{/if}
				</ListboxButton>
			</div>
			{#if Boolean(info)}
				<Popover placement="right">
					<IconInfo
						class="text-info-content dark:text-info"
						slot="button"
						width="22px"
						height="22px"
					/>
					<div class="m-2 w-full rounded-md bg-base-200 p-2 text-center text-sm shadow-md">
						{$_(info)}
					</div>
				</Popover>
			{/if}
		</div>
		<ListboxOptions
			class="mt-1 max-h-60 overflow-auto rounded-md bg-base-200 py-1 text-sm shadow-sm"
		>
			<slot />
		</ListboxOptions>
	</Listbox>
	<ErrorSpan {error} {id} />
</div>
