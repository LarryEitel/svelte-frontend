<script lang="ts">
	import PhUsersThree from '~icons/ph/users-three';
	import PhGraduationCap from '~icons/ph/graduation-cap';
	import PhTextAlignCenter from '~icons/ph/text-align-center';
	import PhTextT from '~icons/ph/text-t';
	import { page } from '$app/stores';
	import { Button, TextInput } from '$lib/components';
	import { Select, SelectOption, TextArea } from '$lib/components/form';
	import { Heading } from '$lib/components/text';
	import { toastSuccess } from '$lib/components/toast';
	import { createProgramSchema } from '$lib/schemas';
	import { trpc } from '$lib/trpc/client';
	import { handleErrorInClient } from '$lib/utils';
	import { validateSchema } from '@felte/validator-zod';
	import type { EventVisibility, Faculty } from '@prisma/client';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';

	const { form, errors, isSubmitting, data, resetField } = createForm<
		z.infer<typeof createProgramSchema>
	>({
		onSubmit: async (values) => {
			try {
				await trpc($page).program.createProgram.mutate(values);
				toastSuccess($_('p-new.toast.success'));
				resetField('title');
				resetField('description');
			} catch (error) {
				handleErrorInClient(error);
			}
		},
		validate: validateSchema(createProgramSchema)
	});

	let faculties: Faculty[] = [];

	let selectedFaculty = faculties[0]?.id;
	let selectedVisibility: EventVisibility;

	$: $data.visibility = selectedVisibility;
	$: $data.facultyId = selectedFaculty?.toString();
	$: facultySelectButtonText =
		faculties.find((f) => f.id === selectedFaculty)?.name || $_('p-new.form.faculty-button');

	const fetchFaculties = async () => {
		faculties = await trpc($page).faculty.getFaculties.query();
	};
	let fetchFacultiesPromise: Promise<void> | undefined;
</script>

<Heading>{$_('p-new.title')}</Heading>
<form use:form class="flex w-full max-w-xl flex-col gap-4 rounded-md bg-base-300 p-4">
	<TextInput
		error={$errors.title?.[0]}
		id="title"
		label={$_('p-new.form.title-label')}
		placeholder={$_('p-new.form.title-placeholder')}
	>
		<PhTextT slot="icon" />
	</TextInput>
	<TextArea
		error={$errors.description?.[0]}
		id="description"
		label={$_('p-new.form.description-label')}
		placeholder={$_('p-new.form.description-placeholder')}
	>
		<PhTextAlignCenter slot="icon" />
	</TextArea>

	<Select
		id="facultyId"
		label={$_('p-new.form.faculty-label')}
		bind:selected={selectedFaculty}
		buttonText={facultySelectButtonText}
		error={$errors.facultyId?.[0]}
		on:click={() => (fetchFacultiesPromise ??= fetchFaculties())}
		info={$_('p-new.form.faculty-info')}
	>
		<PhGraduationCap slot="icon" />
		{#await fetchFacultiesPromise}
			{#each Array(10) as _}
				<SelectOption skeleton />
			{/each}
		{:then value}
			{#each faculties as faculty (faculty.id)}
				<SelectOption value={faculty.id}>
					{faculty.acronym + ' - ' + faculty.name}
				</SelectOption>
			{/each}
		{:catch error}
			<span class="px-2">
				{$_('p-new.form.faculty-fetch-error')}
			</span>
		{/await}
	</Select>
	<Select
		id="visibility"
		label={$_('p-new.form.visibility-label')}
		error={$errors.visibility?.[0]}
		bind:selected={selectedVisibility}
		buttonText={selectedVisibility
			? $_('prisma.visibility.' + selectedVisibility?.toLowerCase())
			: ''}
	>
		<PhUsersThree slot="icon" />
		<SelectOption value="PUBLIC">{$_('prisma.visibility.public')}</SelectOption>
		<SelectOption value="PRIVATE">{$_('prisma.visibility.private')}</SelectOption>
	</Select>
	<Button
		data-testid="submit-btn"
		variants={{ intent: 'primary', width: 'full' }}
		type="submit"
		isLoading={$isSubmitting}
	>
		{$_('terms.submit')}
	</Button>
</form>
