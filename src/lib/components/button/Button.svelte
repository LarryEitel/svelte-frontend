<script lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';
	import IconLoading from '~icons/eos-icons/loading';
	import IconArrowSquareOut from '~icons/ph/arrow-square-out';

	export let variants: VariantProps<typeof buttonStyles> = {};
	export let to: string = '';
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let isLoading: boolean = false;
	export let disabled: boolean = false;

	const isExternal = to ? !/^(\/|#)(.*)/g.test(to) : false;

	let buttonStyles = cva('dark:brightness-75 transition-all inline-flex items-center gap-1', {
		variants: {
			intent: {
				primary: 'btn btn-primary',
				secondary: 'btn btn-secondary',
				accent: 'btn btn-accent',
				ghost: 'btn btn-ghost',
				link: 'btn btn-link',
				text: 'hover:opacity-70 text-neutral-content',
				'text-base': 'hover:opacity-70 text-base-content',
				'no-style': 'hover:scale-95',
				danger: 'btn btn-error hover:bg-red-300 hover:border-red-300'
			},
			disabled: {
				true: 'cursor-not-allowed'
			},
			icon: {
				true: 'text-accent hover:bg-accent/20 btn-circle'
			},
			isLoading: {
				true: 'flex gap-2'
			},
			animated: {
				true: 'hover:-translate-y-0.5'
			},
			size: {
				sm: 'btn-sm'
			}
		},
		defaultVariants: {
			intent: 'primary'
		}
	});
</script>

{#if to !== ''}
	<a
		{...$$restProps}
		href={to}
		class={`${buttonStyles(variants)}  ${$$props.class}`}
		target={isExternal ? '_blank' : ''}
	>
		<slot />
		{#if isExternal}
			<IconArrowSquareOut width="16px" height="16px" />
		{/if}
	</a>
{:else}
	<button
		{...$$restProps}
		{type}
		disabled={disabled || isLoading}
		class={`${buttonStyles({ ...variants, disabled: disabled || isLoading })} ${$$props.class}`}
	>
		<slot />
		{#if isLoading}
			<IconLoading width="20px" height="20px" />
		{/if}
	</button>
{/if}
