<script lang="ts">
	import { page } from '$app/stores';
	import { Avatar, Button, Menu } from '$lib/components';
	import { authDialog } from '$lib/stores';
	import { signOut } from '@auth/sveltekit/client';
	import { _ } from 'svelte-i18n';
	import IconHouse from '~icons/ph/house-fill';
	import IconList from '~icons/ph/list';
	import IconMagnifyingGlass from '~icons/ph/magnifying-glass';
	import IconSignOut from '~icons/ph/sign-out';
	import IconUser from '~icons/ph/user';

	const userMenuItems = [
		{ text: $_('terms.my-account'), icon: IconUser, to: '/account', id: 'my-account' },
		{
			text: $_('terms.signout'),
			classes: 'text-error',
			action: signOut,
			icon: IconSignOut,
			id: 'signout'
		}
	];
</script>

<div
	class="navbar rounded-box sticky top-2 z-10 m-2 mb-20 flex justify-between gap-2 bg-base-300 px-3 shadow-md"
>
	<div class="flex gap-1 lg:w-52">
		<Button to="/" variants={{ intent: 'ghost' }} data-testid="nav-home-btn">
			<IconHouse width="32px" height="32px" />
		</Button>
	</div>

	<div class="flex items-center justify-center gap-2">
		<IconMagnifyingGlass width="20px" height="20px" />
		<Button to="/programs" variants={{ intent: 'ghost' }}>
			<span>{$_('terms.programs')}</span>
		</Button>
		<Button to="/projects" variants={{ intent: 'ghost' }}>
			<span>{$_('terms.projects')}</span>
		</Button>
		<Button to="/activities" variants={{ intent: 'ghost' }}>
			{$_('terms.activities')}
		</Button>
	</div>

	<div class={`flex items-end justify-end gap-2 lg:w-52`} data-testid="nav-right-div">
		{#if $page.data.session?.user}
			<div class="hidden items-center gap-2 rounded-md bg-base-200 p-2 sm:flex">
				<Avatar
					data-testid="user-avatar"
					src={$page.data.session.user?.image || $page.data.session.user?.name || 'A'}
					size="sm"
				/>
				<Menu trigger={$page.data.session.user.name} triggerId="user-menu" items={userMenuItems} />
			</div>
			<Menu class="flex sm:hidden" items={userMenuItems}>
				<Button slot="trigger" variants={{ intent: 'ghost' }}>
					<IconList width="32px" height="32px" />
				</Button>
			</Menu>
		{:else}
			<Button
				data-testid="nav-signin-btn"
				class="hover:-translate-y-0.5"
				on:click={() => authDialog.update(() => ({ isOpen: true }))}
			>
				{$_('terms.signin')}
			</Button>
		{/if}
	</div>
</div>
