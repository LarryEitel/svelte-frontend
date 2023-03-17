<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { Button, TextInput } from '$lib/components';
	import { Checkbox, PhoneInput } from '$lib/components/form';
	import { toastInfo } from '$lib/components/toast';
	import { signupSchema } from '$lib/schemas';
	import { authDialog } from '$lib/stores';
	import { trpc } from '$lib/trpc/client';
	import { handleErrorInClient } from '$lib/utils';
	import { validateSchema } from '@felte/validator-zod';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';

	let isPhoneValid = false;

	const { form, errors, isValid, touched, data, isSubmitting } = createForm<
		z.infer<typeof signupSchema>
	>({
		onSubmit: async (values) => {
			try {
				await trpc($page).user.createUser.mutate(values);
				await trpc($page).user.sendEmail.mutate({
					email: values.email,
					type: 'VALIDATE_EMAIL'
				});
				toastInfo($_('dialogs.auth.signup-success'), { initial: 0 });
				authDialog.update(() => ({ isOpen: false }));
			} catch (error) {
				handleErrorInClient(error);
			}
		},
		validate: [
			validateSchema(signupSchema),
			() => {
				if (!isPhoneValid) {
					return {
						phone: 'zod.phone.invalid'
					};
				}
			}
		]
	});

	const handleTermsClick = (document: 'privacy' | 'terms') => {
		authDialog.update(() => ({ isOpen: false, context: 'signup' }));
		goto(`/legal/${document}`);
	};
</script>

<form use:form class="flex w-full flex-col gap-4">
	<TextInput
		data-testid="signup-name-input"
		error={$errors.name?.[0]}
		id="name"
		label={$_('dialogs.auth.name-label')}
		placeholder={$_('dialogs.auth.name-placeholder')}
	/>
	<TextInput
		data-testid="signup-email-input"
		error={$errors.email?.[0]}
		id="email"
		label={$_('dialogs.auth.email-label')}
		placeholder={$_('dialogs.auth.email-placeholder')}
		type="email"
	/>
	<PhoneInput
		data-testid="signup-phone-input"
		bind:isTouched={$touched.phone}
		bind:isValid={isPhoneValid}
		bind:parsedValue={$data.phone}
		id="phone"
		label={$_('dialogs.auth.phone-label')}
		placeholder={$_('dialogs.auth.phone-placeholder')}
		autocomplete="tel"
	/>
	<TextInput
		data-testid="signup-password-input"
		error={$errors.password?.[0]}
		id="password"
		label={$_('dialogs.auth.password-label')}
		placeholder={$_('dialogs.auth.password-placeholder')}
		autocomplete="new-password"
		type="password"
	/>
	<TextInput
		data-testid="signup-cpassword-input"
		error={$errors.cpassword?.[0]}
		id="cpassword"
		label={$_('dialogs.auth.cpassword-label')}
		placeholder={$_('dialogs.auth.password-placeholder')}
		autocomplete="new-password"
		type="password"
	/>
	<Checkbox id="isTermsAccepted" type="checkbox">
		<label for="isTermsAccepted" class="text-left text-xs font-medium" slot="label">
			{$_('dialogs.auth.accept-terms-label')}
			<span
				class="h-[1rem] min-h-[1rem] cursor-pointer whitespace-normal text-xs font-bold transition-opacity hover:opacity-75"
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						e.preventDefault();
						handleTermsClick('privacy');
					}
				}}
				on:click={(e) => {
					e.preventDefault();
					handleTermsClick('privacy');
				}}
			>
				{$_('terms.privacy-policy')}
			</span>
			{$_('dialogs.auth.terms-agreement.2')}
			<span
				class="h-[1rem] min-h-[1rem] cursor-pointer whitespace-normal text-xs font-bold transition-opacity hover:opacity-75"
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						e.preventDefault();
						handleTermsClick('privacy');
					}
				}}
				on:click={(e) => {
					e.preventDefault();
					handleTermsClick('terms');
				}}
			>
				{$_('terms.terms-and-conditions')}.
			</span>
		</label>
	</Checkbox>
	<Button
		data-testid="signup-submit-button"
		variants={{ intent: 'primary', width: 'full' }}
		isLoading={$isSubmitting}
		disabled={!$isValid}
		type="submit"
	>
		{$_('terms.signup')}
	</Button>
</form>
