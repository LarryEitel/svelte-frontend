<script lang="ts">
	import PhCalendarPlusFill from '~icons/ph/calendar-plus-fill';
	import PhCalendarPlus from '~icons/ph/calendar-plus';
	import PhCalendarBlankFill from '~icons/ph/calendar-blank-fill';
	import PhCalendarBlank from '~icons/ph/calendar-blank';
	import PhUsersThree from '~icons/ph/users-three';
	import PhGraduationCap from '~icons/ph/graduation-cap';
	import PhFlowArrow from '~icons/ph/flow-arrow';
	import PhListChecks from '~icons/ph/list-checks';
	import PhLink from '~icons/ph/link';
	import PhArmchair from '~icons/ph/armchair';
	import PhTextAlignCenter from '~icons/ph/text-align-center';
	import PhTextT from '~icons/ph/text-t';
	import PhChatCenteredText from '~icons/ph/chat-centered-text';
	import { page } from '$app/stores';
	import { Button, TextInput } from '$lib/components';
	import { AddressInput, Select, SelectOption, TextArea } from '$lib/components/form';
	import { Heading } from '$lib/components/text';
	import { toastSuccess } from '$lib/components/toast';
	import { createActivitySchema } from '$lib/schemas';
	import { trpc } from '$lib/trpc/client';
	import type { AppRouterOutput } from '$lib/trpc/router';
	import { handleErrorInClient } from '$lib/utils';
	import { validateSchema } from '@felte/validator-zod';
	import type { EventVisibility, Faculty, Modality } from '@prisma/client';
	import { createForm } from 'felte';
	import { _ } from 'svelte-i18n';
	import type { z } from 'zod';
	import Separator from '$lib/components/form/Separator.svelte';
	import { DateTime } from 'luxon';
	import { fade } from 'svelte/transition';

	const { form, errors, isSubmitting, data, resetField } = createForm<
		z.infer<typeof createActivitySchema>
	>({
		initialValues: {
			title: 'title',
			description: 'description',
			shortDescription: 'shortDescription',
			visibility: 'PUBLIC',
			facultyId: 'facultyid'
		},
		onSubmit: async (values) => {
			try {
				values = {
					...values,
					startDate: DateTime.fromISO(values.startDate).toISO(),
					endDate: DateTime.fromISO(values.endDate).toISO(),
					enrollmentStartDate: DateTime.fromISO(values.enrollmentStartDate).toISO(),
					enrollmentEndDate: DateTime.fromISO(values.enrollmentEndDate).toISO()
				};

				// await trpc($page).project.createProject.mutate(values);
				toastSuccess($_('a-new.toast.success'));
				resetField('title');
				resetField('description');
				resetField('shortDescription');
			} catch (error) {
				handleErrorInClient(error);
			}
		},
		validate: validateSchema(createActivitySchema)
	});

	// Faculties select
	let faculties: Faculty[] = [];
	let selectedFaculty = faculties[0]?.id;
	let fetchFacultiesPromise: Promise<void> | undefined;

	const fetchFaculties = async () => {
		faculties = await trpc($page).faculty.getFaculties.query();
	};

	// Projects select
	let projects: AppRouterOutput['project']['getProjectsForSelect'] = [];
	let selectedProject = projects[1]?.id;
	let fetchProjectsPromise: Promise<void> | undefined;

	$: $data.projectId = selectedProject;

	const fetchProjects = async () => {
		projects = await trpc($page).project.getProjectsForSelect.query();
	};

	// Visibility select
	let selectedVisibility: EventVisibility | '' = '';
	$: $data.visibility = selectedVisibility;

	// Modality select
	let selectedModality: Modality | '' = '';
	$: $data.modality = selectedModality;

	// Checkboxes
	let useProjectFaculty = true;
	$: {
		if (useProjectFaculty) {
			$data.facultyId = projects.find((p) => p.id === selectedProject)?.facultyId || '';
		} else {
			$data.facultyId = selectedFaculty;
		}
	}
	let useProjectVisibility = true;
	$: {
		if (useProjectVisibility) {
			$data.visibility = projects.find((p) => p.id === selectedProject)?.visibility || 'PUBLIC';
		} else {
			$data.visibility = selectedVisibility;
		}
	}

	// dates
	const formatToDateInput = (date?: string) => {
		const format = "yyyy-MM-dd'T'HH:mm";

		if (!date) {
			return DateTime.now().toFormat(format);
		}

		return DateTime.fromISO(date).toFormat(format);
	};

	$: minEnrollmentStartDate = formatToDateInput($data.startDate);
	$: minEnrollmentEndDate = formatToDateInput($data.enrollmentStartDate);

	$: maxEnrollmentDate = $data.endDate
		? formatToDateInput($data.endDate)
		: formatToDateInput(DateTime.now().plus({ years: 3 }).toISO());
</script>

<Heading>{$_('a-new.title')}</Heading>
<form use:form class="flex w-full max-w-xl flex-col gap-4 rounded-md bg-base-300 p-4">
	<Separator>
		{$_('a-new.form.separators.basic')}
	</Separator>

	<TextInput
		error={$errors.title?.[0]}
		id="title"
		label={$_('a-new.form.title-label')}
		placeholder={$_('a-new.form.title-placeholder')}
	>
		<PhTextT slot="icon" />
	</TextInput>

	<TextInput
		error={$errors.shortDescription?.[0]}
		id="shortDescription"
		label={$_('a-new.form.shortDescription-label')}
		placeholder={$_('a-new.form.shortDescription-placeholder')}
	>
		<PhChatCenteredText slot="icon" />
	</TextInput>

	<TextArea
		error={$errors.description?.[0]}
		id="description"
		label={$_('a-new.form.description-label')}
		placeholder={$_('a-new.form.description-placeholder')}
	>
		<PhTextAlignCenter slot="icon" />
	</TextArea>

	<Select
		id="modality"
		label={$_('a-new.form.modality-label')}
		error={$errors.modality?.[0]}
		bind:selected={selectedModality}
		buttonText={selectedModality
			? $_('a-new.form.modality-' + selectedModality?.toLowerCase())
			: ''}
	>
		<PhArmchair slot="icon" />
		<SelectOption value="HYBRID">{$_('a-new.form.modality-hybrid')}</SelectOption>
		<SelectOption value="PRESENTIAL">{$_('a-new.form.modality-presential')}</SelectOption>
		<SelectOption value="REMOTE">{$_('a-new.form.modality-remote')}</SelectOption>
	</Select>

	{#if selectedModality !== 'REMOTE'}
		<div transition:fade>
			<AddressInput
				id="locationPresential"
				error={$errors.locationPresential?.[0]}
				label={$_('a-new.form.location.presential.label')}
				placeholder={$_('a-new.form.location.presential.placeholder')}
				bind:address={$data.locationPresential}
			/>
		</div>
	{/if}

	{#if selectedModality !== 'PRESENTIAL'}
		<div transition:fade>
			<TextInput
				id="locationRemote"
				error={$errors.locationRemote?.[0]}
				label={$_('a-new.form.location.remote.label')}
				placeholder={$_('a-new.form.location.remote.placeholder')}
			>
				<PhLink slot="icon" />
			</TextInput>
		</div>
	{/if}

	<TextArea
		error={$errors.prerequisites?.[0]}
		id="prerequisites"
		label={$_('a-new.form.prerequisites-label')}
		placeholder={$_('a-new.form.prerequisites-placeholder')}
	>
		<PhListChecks slot="icon" />
	</TextArea>

	<Select
		id="projectId"
		label={$_('a-new.form.project-label')}
		bind:selected={selectedProject}
		buttonText={projects.find((p) => p.id === selectedProject)?.title ||
			$_('a-new.form.project-button')}
		error={$errors.projectId?.[0]}
		on:click={() => (fetchProjectsPromise ??= fetchProjects())}
	>
		<PhFlowArrow slot="icon" />
		{#await fetchProjectsPromise}
			{#each Array(10) as _}
				<SelectOption skeleton />
			{/each}
		{:then}
			{#each projects as project (project.id)}
				<SelectOption value={project.id}>
					{project.title}
				</SelectOption>
			{/each}
		{:catch}
			<span class="px-2">
				{$_('a-new.form.project-fetch-error')}
			</span>
		{/await}
	</Select>

	<label for="useProjectFaculty" class="flex items-center gap-2 text-sm">
		<input
			id="useProjectFaculty"
			data-testid="use-project-faculty"
			type="checkbox"
			class="checkbox"
			bind:checked={useProjectFaculty}
		/>
		{$_('a-new.form.use-project-faculty')}
	</label>

	{#if !useProjectFaculty}
		<Select
			id="facultyId"
			label={$_('a-new.form.faculty-label')}
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

	<label for="useProjectVisibility" class="flex items-center gap-2 text-sm">
		<input
			id="useProjectVisibility"
			data-testid="use-project-visibility"
			type="checkbox"
			class="checkbox"
			bind:checked={useProjectVisibility}
		/>
		{$_('a-new.form.use-project-visibility')}
	</label>

	{#if !useProjectVisibility}
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

	<Separator>
		{$_('a-new.form.separators.dates')}
	</Separator>

	<TextInput
		id="startDate"
		label={$_('a-new.form.start-date-label')}
		error={$errors.startDate?.[0]}
		type="datetime-local"
		min={DateTime.now().toFormat("yyyy-MM-dd'T'HH:mm")}
		max={DateTime.now().plus({ years: 3 }).toFormat("yyyy-MM-dd'T'HH:mm")}
	>
		<PhCalendarBlank slot="icon" />
	</TextInput>

	<TextInput
		id="endDate"
		label={$_('a-new.form.end-date-label')}
		error={$errors.endDate?.[0]}
		type="datetime-local"
		min={DateTime.now().toFormat("yyyy-MM-dd'T'HH:mm")}
		max={DateTime.now().plus({ years: 3 }).toFormat("yyyy-MM-dd'T'HH:mm")}
	>
		<PhCalendarBlankFill slot="icon" />
	</TextInput>

	<TextInput
		id="enrollmentStartDate"
		label={$_('a-new.form.enrollment-start-date-label')}
		error={$errors.enrollmentStartDate?.[0]}
		type="datetime-local"
		min={minEnrollmentStartDate}
		max={maxEnrollmentDate}
	>
		<PhCalendarPlus slot="icon" />
	</TextInput>

	<TextInput
		id="enrollmentEndDate"
		label={$_('a-new.form.enrollment-end-date-label')}
		error={$errors.enrollmentEndDate?.[0]}
		type="datetime-local"
		min={minEnrollmentEndDate}
		max={maxEnrollmentDate}
	>
		<PhCalendarPlusFill slot="icon" />
	</TextInput>

	<Separator>
		{$_('a-new.form.separators.additional-info')}
	</Separator>

	<TextArea
		id="contact"
		label={$_('a-new.form.contact-label')}
		error={$errors.contact?.[0]}
		placeholder={$_('a-new.form.contact-placeholder')}
	/>

	<Button
		data-testid="submit-btn"
		variants={{ width: 'full' }}
		type="submit"
		isLoading={$isSubmitting}
	>
		{$_('terms.submit')}
	</Button>
</form>
