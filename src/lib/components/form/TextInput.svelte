<script lang="ts">
	import type { VariantProps } from 'class-variance-authority';
	import { _ } from 'svelte-i18n';
	import Button from '../button/Button.svelte';
	import IconEyeClosed from '~icons/ph/eye-closed';
	import IconEyeOpened from '~icons/ph/eye';
	import { inputStyles } from './text-styles';
	import ErrorSpan from './ErrorSpan.svelte';

	export let variants: VariantProps<typeof inputStyles> = {};
	export let label = '';
	export let id: string;
	export let error = '';
	export let type = 'text';
	export let element: HTMLInputElement | null = null;

	const isInitialTypePassword = type === 'password';

	$: isPasswordHidden = type === 'password';

	function togglePassword() {
		type = isPasswordHidden ? 'text' : 'password';
	}
</script>

<div class={`flex w-full flex-col items-start gap-1 ${$$props.class}`}>
	{#if !!label}
		<label for={id}>
			<span class="label-text">{label}</span>
		</label>
	{/if}
	<div class="flex w-full gap-2">
		<slot name="left" />
		<slot>
			<input
				bind:this={element}
				maxlength="255"
				class={inputStyles({ intent: error ? 'error' : variants.intent })}
				data-testid={`${id}-input`}
				name={id}
				{type}
				{...$$restProps}
			/>
		</slot>
		{#if isInitialTypePassword}
			<Button variants={{ intent: 'ghost' }} on:click={togglePassword}>
				{#if isPasswordHidden}
					<IconEyeClosed width="24px" height="24px" />
				{:else}
					<IconEyeOpened width="24px" height="24px" />
				{/if}
			</Button>
		{/if}
		<slot name="right" />
	</div>
	<ErrorSpan {error} {id} />
</div>
