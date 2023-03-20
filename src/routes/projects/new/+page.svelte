<script lang="ts">
	import PhUsersThree from '~icons/ph/users-three';
	import PhGraduationCap from '~icons/ph/graduation-cap';
	import PhFlowArrow from '~icons/ph/flow-arrow';
	import PhTextAlignCenter from '~icons/ph/text-align-center';
	import PhTextT from '~icons/ph/text-t';
	import { page } from '$app/stores';
	import { Button, TextInput } from '$lib/components';
	import { Select, SelectOption, TextArea } from '$lib/components/form';
	import { Heading } from '$lib/components/text';
	import { toastSuccess } from '$lib/components/toast';
	import { createProjectSchema } from '$lib/schemas';
	import { trpc } from '$lib/trpc/client';
	import type { AppRouterOutput } from '$lib/trpc/router';
	import { handleErrorInClient } from '$lib/utils';
	import { validateSchema } from '@felte/validator-zod';
	import type { EventVisibility, Faculty } from '@prisma/client';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';

	const { form, errors, isSubmitting, data, resetField } = createForm<
		z.infer<typeof createProjectSchema>
	>({
		onSubmit: async (values) => {
			try {
				await trpc($page).project.createProject.mutate(values);
				toastSuccess($_('proj-new.toast.success'));
				resetField('title');
				resetField('description');
			} catch (error) {
				handleErrorInClient(error);
			}
		},
		validate: validateSchema(createProjectSchema)
	});

	// Programs select
	let programs: AppRouterOutput['program']['getProgramsForSelect'] = [
		{ id: '-1', title: $_('proj-new.form.program-none'), facultyId: '', visibility: 'PUBLIC' }
	];
	let selectedProgram = programs[1]?.id;
	let fetchProgramsPromise: Promise<void> | undefined;
	$: bindToProgram = selectedProgram !== '-1';

	$: $data.programId = selectedProgram;

	const fetchPrograms = async () => {
		programs = [...programs, ...(await trpc($page).program.getProgramsForSelect.query())];
	};

	// Faculties select
	let faculties: Faculty[] = [];
	let selectedFaculty = faculties[0]?.id;
	let fetchFacultiesPromise: Promise<void> | undefined;

	const fetchFaculties = async () => {
		faculties = await trpc($page).faculty.getFaculties.query();
	};
	// Visibility select
	let selectedVisibility: EventVisibility = 'PUBLIC';
	$: $data.visibility = selectedVisibility;

	// Checkboxes
	let useProgramFaculty = true;
	$: {
		if (useProgramFaculty && bindToProgram) {
			$data.facultyId = programs.find((p) => p.id === selectedProgram)?.facultyId || '';
		} else {
			$data.facultyId = selectedFaculty;
		}
	}
	let useProgramVisibility = true;
	$: {
		if (useProgramVisibility && bindToProgram) {
			$data.visibility = programs.find((p) => p.id === selectedProgram)?.visibility || 'PUBLIC';
		} else {
			$data.visibility = selectedVisibility;
		}
	}
</script>

<Heading>{$_('proj-new.title')}</Heading>
<form use:form class="flex w-full max-w-xl flex-col gap-4 rounded-md bg-base-300 p-4">
	<TextInput
		error={$errors.title?.[0]}
		id="title"
		label={$_('p-new.form.title-label')}
		placeholder={$_('proj-new.form.title-placeholder')}
	>
		<PhTextT slot="icon" />
	</TextInput>

	<TextArea
		error={$errors.description?.[0]}
		id="description"
		label={$_('p-new.form.description-label')}
		placeholder={$_('proj-new.form.description-placeholder')}
	>
		<PhTextAlignCenter slot="icon" />
	</TextArea>

	<Select
		id="programId"
		label={$_('proj-new.form.program-label')}
		bind:selected={selectedProgram}
		buttonText={programs.find((p) => p.id === selectedProgram)?.title ||
			$_('proj-new.form.program-button')}
		error={$errors.programId?.[0]}
		on:click={() => (fetchProgramsPromise ??= fetchPrograms())}
	>
		<PhFlowArrow slot="icon" />
		{#await fetchProgramsPromise}
			{#each Array(10) as _}
				<SelectOption skeleton />
			{/each}
		{:then}
			{#each programs as program (program.id)}
				<SelectOption value={program.id}>
					{program.title}
				</SelectOption>
			{/each}
		{:catch}
			<span class="px-2">
				{$_('proj-new.form.program-fetch-error')}
			</span>
		{/await}
	</Select>

	{#if bindToProgram}
		<label for="useProgramFaculty" class="flex items-center gap-2 text-sm">
			<input
				id="useProgramFaculty"
				data-testid="use-program-faculty"
				type="checkbox"
				class="checkbox"
				bind:checked={useProgramFaculty}
			/>
			{$_('proj-new.form.use-program-faculty')}
		</label>
	{/if}

	{#if !useProgramFaculty || !bindToProgram}
		<Select
			id="facultyId"
			label={$_('proj-new.form.faculty-label')}
			bind:selected={selectedFaculty}
			buttonText={faculties.find((f) => f.id === selectedFaculty)?.name ||
				$_('p-new.form.faculty-button')}
			error={$errors.facultyId?.[0]}
			on:click={() => (fetchFacultiesPromise ??= fetchFaculties())}
			info={$_('p-new.form.faculty-info')}
		>
			<PhGraduationCap slot="icon" />
			{#await fetchFacultiesPromise}
				{#each Array(10) as _}
					<SelectOption skeleton />
				{/each}
			{:then}
				{#each faculties as faculty (faculty.id)}
					<SelectOption value={faculty.id}>
						{faculty.acronym + ' - ' + faculty.name}
					</SelectOption>
				{/each}
			{:catch error}
				<span class="px-2">
					{$_('p-new-form.faculty-fetch-error')}
				</span>
			{/await}
		</Select>
	{/if}

	{#if bindToProgram}
		<label for="useProgramVisibility" class="flex items-center gap-2 text-sm">
			<input
				id="useProgramVisibility"
				data-testid="use-program-visibility"
				type="checkbox"
				class="checkbox"
				bind:checked={useProgramVisibility}
			/>
			{$_('proj-new.form.use-program-visibility')}
		</label>
	{/if}

	{#if !useProgramVisibility || !bindToProgram}
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
	{/if}

	<label for="acceptStudentsProposals" class="flex items-center gap-2 text-sm">
		<input
			id="acceptStudentsProposals"
			data-testid="accept-students-proposals"
			type="checkbox"
			class="checkbox"
			bind:checked={$data.acceptStudentsProposals}
		/>
		{$_('proj-new.form.accept-students-proposals')}
	</label>

	<Button
		data-testid="submit-btn"
		variants={{ intent: 'primary', width: 'full' }}
		type="submit"
		isLoading={$isSubmitting}
	>
		{$_('terms.submit')}
	</Button>
</form>
