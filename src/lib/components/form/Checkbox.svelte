<script lang="ts">
	import { _ } from 'svelte-i18n';

	export let label = '';
	export let id: string;
	export let error = '';
</script>

<div class={`form-control w-full ${$$props.class}`}>
	<div class="flex w-full items-center gap-2">
		<input
			{id}
			name={id}
			class="checkbox"
			data-testid={`${id}-checkbox`}
			type="checkbox"
			{...$$restProps}
		/>
		<slot name="label">
			<span class="label-text">{label}</span>
		</slot>
	</div>
	{#if !!error}
		<span class="mb-2 h-2 text-xs font-bold text-error" data-testid={`${id}-error`}>
			{$_(error)}
		</span>
	{/if}
</div>
