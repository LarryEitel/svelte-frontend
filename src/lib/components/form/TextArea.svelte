<script lang="ts">
	import type { VariantProps } from 'class-variance-authority';
	import { inputStyles } from './text-styles';
	import ErrorSpan from './ErrorSpan.svelte';
	import { MAX_LENGTH_LARGE_STRINGS } from '$lib/schemas';

	export let label = '';
	export let placeholder = '';
	export let id: string;
	export let error = '';
	export let element: HTMLTextAreaElement | null = null;
	export let variants: VariantProps<typeof inputStyles> = {};
	export let maxLength: number = MAX_LENGTH_LARGE_STRINGS;

	let textLength: number | undefined;

	function onInput() {
		textLength = element?.textLength;
	}
</script>

<div class={`flex w-full flex-col items-start gap-1 ${$$props.class}`}>
	<div class="flex w-full flex-row items-center justify-end">
		<div class="flex-auto justify-start">
			{#if Boolean(label)}
				<label class="label-text" for={id}>{label}</label>
			{/if}
		</div>
		<div class="flex-none cursor-default text-xs tracking-wider">
			{textLength || 0}/{maxLength}
		</div>
	</div>
	<div class="flex w-full">
		{#if $$slots.icon}
			<div class="flex flex-col rounded-l-md bg-base-100">
				<slot name="icon" />
				<div class="h-full" />
			</div>
		{/if}
		<textarea
			data-testid={`${id}-textarea`}
			{placeholder}
			class={`w-full ${inputStyles({
				intent: error ? 'error' : variants.intent,
				height: 'textarea'
			})}`}
			class:rounded-l-none={$$slots.icon}
			maxlength={maxLength}
			bind:this={element}
			on:input={onInput}
			name={id}
			{id}
			cols="30"
			rows="10"
		/>
	</div>
	<ErrorSpan {error} {id} />
</div>
