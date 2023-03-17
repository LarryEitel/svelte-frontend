<script lang="ts">
	import '$lib/styles/flags.css';
	import TelInput, { clickOutsideAction, getCurrentCountry } from 'svelte-tel-input';
	import type { CountryCode, E164Number, NormalizedTelNumber } from 'svelte-tel-input/types';
	import { _ } from 'svelte-i18n';
	import PhoneCountryPicker from './PhoneCountryPicker.svelte';
	import ErrorSpan from './ErrorSpan.svelte';

	export let id: string;
	export let label: string;
	export let isValid: boolean;
	export let isTouched: boolean;
	export let parsedValue: string;

	export let parsedTelInput: NormalizedTelNumber | null = null;
	export let value: E164Number | null = '';

	let selected: CountryCode = 'BR';
	let isOpen = false;

	$: isValid = parsedTelInput?.isValid ?? false;

	$: parsedValue = (parsedTelInput?.e164 as string) ?? '';

	function handleInput(e: any) {
		isTouched = true;
		if (e.target.value === '') {
			parsedTelInput = null;
		}
	}
</script>

<label class="flex w-full flex-col items-start gap-1" for={id + '-shell'}>
	<span class="label-text">{label}</span>
	<div class="flex w-full gap-2 rounded-md" use:clickOutsideAction={() => (isOpen = false)}>
		<PhoneCountryPicker bind:selected bind:isOpen />

		<TelInput
			maxlength={20}
			id={id + '-shell'}
			{...$$restProps}
			on:input={handleInput}
			bind:country={selected}
			bind:parsedTelInput
			bind:value
			class="input h-[2.5rem] w-full rounded-md border bg-base-200 p-2 text-sm placeholder:text-sm placeholder:text-base-content/40 focus:outline-none {!isValid &&
			isTouched
				? `border border-error`
				: `focus:border-base-content/40`} block w-full rounded-r-md p-2.5 text-sm 
             focus:outline-none"
		/>
		<input {id} name={id} type="hidden" bind:value={parsedValue} />
	</div>
	{#if !isValid && isTouched}
		<ErrorSpan error={$_('zod.phone.invalid')} {id} />
	{/if}
</label>
