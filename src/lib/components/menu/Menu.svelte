<script lang="ts">
	import { Menu, MenuButton, MenuItem, MenuItems } from '@rgossiaux/svelte-headlessui';
	import { Button } from '..';
	import IconArrowDown from '~icons/material-symbols/keyboard-arrow-down-rounded';
	import { createPopperActions } from 'svelte-popperjs';
	import type { ComponentType, SvelteComponentTyped } from 'svelte';

	const [popperRef, popperContent] = createPopperActions({
		placement: 'auto',
		strategy: 'fixed',
		modifiers: [
			{
				name: 'flip',
				options: {
					allowedAutoPlacements: ['bottom', 'top']
				}
			}
		]
	});

	export let trigger: string | null = null;
	export let triggerId = '';
	export let items: {
		id?: string;
		text: string;
		icon: ComponentType<SvelteComponentTyped>;
		classes?: string;
		to?: string;
		action?: () => void;
	}[];
</script>

<Menu {...$$restProps} let:open>
	<div use:popperRef>
		<MenuButton>
			{#if trigger !== null}
				<Button
					data-testid={`menu-trigger-${triggerId}`}
					variants={{ intent: 'ghost', case: 'normal', size: 'sm' }}
				>
					<p class="max-w-[7rem] truncate text-sm font-semibold">{trigger}</p>
					<IconArrowDown width="20px" height="20px" />
				</Button>
			{:else}
				<slot name="trigger" />
			{/if}
		</MenuButton>
	</div>
	{#if open}
		<div use:popperContent>
			<MenuItems class="my-2 flex flex-col gap-1 rounded-lg bg-base-200 p-1 shadow">
				{#each items as item}
					<MenuItem
						class="cursor-pointer rounded-md transition-transform hover:scale-95 hover:bg-primary hover:text-primary-content {item.classes}"
					>
						<Button
							data-testid={`menu-item-${item.id ?? item.text}`}
							class="items-center justify-center whitespace-nowrap p-2 text-sm font-semibold"
							variants={{ intent: 'no-style' }}
							to={item.to ?? ''}
							on:click={() => {
								if (item.action) {
									item.action();
								}
							}}
						>
							<svelte:component this={item.icon} width="20px" height="20px" />
							{item.text}
						</Button>
					</MenuItem>
				{/each}
			</MenuItems>
		</div>
	{/if}
</Menu>
