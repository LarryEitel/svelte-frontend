<script lang="ts">
	import { Button, Dialog, TextInput } from '$lib/components';
	import { _ } from 'svelte-i18n';
	import IconGoogle from '~icons/logos/google-icon';

	export let isOpen = false;
</script>

<Dialog
	size="xs"
	description={$_('dialog.signin.description')}
	title={$_('dialog.signin.title')}
	bind:isOpen
>
	<div class="px-2 flex justify-center items-center flex-col my-4">
		<Button variants={{ intent: 'provider', provider: 'google' }}>
			<IconGoogle width="18px" height="18px" />
			<p class="flex-1">Sign in with Google</p>
		</Button>
		<div class="relative flex py-4 items-center w-full">
			<div class="flex-grow border-t border-base-content" />
			<span class="flex-shrink mx-4 text-sm text-base-content"
				>{$_('dialog.signin.or-continue')}</span
			>
			<div class="flex-grow border-t border-base-content" />
		</div>
		<form class="w-full">
			<TextInput
				value="email"
				id="email"
				label={$_('dialog.signin.email-label')}
				placeholder={$_('dialog.signin.email-placeholder')}
				type="email"
				required
			/>
		</form>
	</div>
</Dialog>
