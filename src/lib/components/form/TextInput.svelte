<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';

	export let variants: VariantProps<typeof inputStyles> = {};
	export let label: string;
	export let id: string;
	export let value: string;
	export let error: string = 'Email address looks invalid';

	const inputStyles = cva(
		'focus:outline-none input p-2 h-[2.5rem] rounded-md placeholder:text-base-content/40 placeholder:text-sm w-full text-sm',
		{
			variants: {
				intent: {
					primary: 'border bg-base-200 focus:border-base-content/40',
					darker: 'bg-gray-200 dark:bg-gray-900',
					error: 'border-error border-2'
				}
			},
			defaultVariants: {
				intent: 'primary'
			}
		}
	);
</script>

<label class="label flex flex-col items-start gap-1" for={id}>
	<span class="label-text">{label}</span>
	<input
		class={inputStyles({ intent: !!value && !!error ? 'error' : variants.intent })}
		data-testid={`${id}-input`}
		{id}
		{...$$restProps}
	/>
	{#if !!value && !!error}
		<span class="text-error text-xs mt-1 h-2" data-testid={`${id}-error`}>
			{error}
		</span>
	{/if}
</label>
