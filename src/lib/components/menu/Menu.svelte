<script>
	import { Menu, MenuButton, MenuItems, MenuItem } from '@rgossiaux/svelte-headlessui';
</script>

<Menu>
	<MenuButton>More</MenuButton>
	<MenuItems>
		<MenuItem let:active>
			<a href="/account-settings" class:active>Account settings</a>
		</MenuItem>
		<MenuItem let:active>
			<a href="/documentation" class:active>Documentation</a>
		</MenuItem>
		<MenuItem disabled>
			<span class="disabled">Invite a friend (coming soon!)</span>
		</MenuItem>
	</MenuItems>
</Menu>
