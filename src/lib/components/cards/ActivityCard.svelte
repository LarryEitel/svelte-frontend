<script lang="ts">
	import type { AppRouterOutput } from '$lib/trpc/router';
	import { DateFormats } from '$lib/utils';
	import { getDateStatus } from '$lib/utils/activity.utils';
	import { formatRelative } from 'date-fns';
	import enUS from 'date-fns/locale/en-US/index.js';
	import ptBR from 'date-fns/locale/pt-BR/index.js';
	import { DateTime } from 'luxon';
	import { locale, _ } from 'svelte-i18n';
	import IconVideoCamera from '~icons/heroicons-solid/video-camera';
	import IconMapPin from '~icons/map/map-pin';
	import { Avatar } from '..';
	import Button from '../button/Button.svelte';
	import Tag from '../tag/Tag.svelte';
	import HighlightedSpan from '../text/HighlightedSpan.svelte';

	export let activity: AppRouterOutput['activity']['getActivities'][0];

	const isActivityFinished = DateTime.fromISO(activity.endDate).diffNow().milliseconds < 0;
	const isActivityStartInThePast = DateTime.fromISO(activity.startDate).diffNow().milliseconds < 0;

	const dateStatus = getDateStatus({
		end: activity.endDate,
		start: activity.startDate
	});
	const enrollmentStatus = getDateStatus({
		end: activity.enrollmentEndDate,
		start: activity.enrollmentStartDate
	});

	$: formatDate = (ISODate: string) => {
		const date = DateTime.fromISO(ISODate);
		const now = DateTime.now();

		if (date.diff(now, 'days').days >= 1) {
			return date.setLocale($locale === 'pt-BR' ? 'pt-BR' : 'en').toLocaleString(DateFormats.long);
		}

		return formatRelative(date.toJSDate(), new Date(), {
			locale: $locale === 'pt-BR' ? ptBR : enUS
		});
	};
</script>

<div class="rounded-box flex max-w-sm flex-col gap-2 bg-base-300 p-3 shadow-md">
	<div class="rounded-box flex items-center justify-between gap-2 bg-base-200 p-1 px-3">
		<div class="flex flex-col">
			<span class="max-w-[17rem] text-lg font-semibold line-clamp-3">{activity.title}</span>
			<span class="max-w-[17rem] text-sm line-clamp-1">{activity.User.name}</span>
		</div>
		<Avatar src={activity.User?.image || activity.User.name} size="md" class="rounded-3xl" />
	</div>
	<div class="my-2 flex flex-wrap items-center gap-2 text-sm font-semibold">
		<!-- <Button intent="no-style" to={`${ProjectsRoute}/${activity.projectId}`}> -->
		<a href="/">
			<Tag variants={{ intent: 'project' }}>{activity.Project.title}</Tag>
		</a>
		{#if activity.modality === 'REMOTE'}
			<Tag variants={{ intent: 'online' }}>
				<IconVideoCamera class="w-5" />
				<span>Online</span>
			</Tag>
		{/if}
	</div>
	<p class="line-clamp-3">{activity.shortDescription}</p>
	<div class="my-3 flex flex-1 flex-col justify-center gap-2 px-1">
		{#if isActivityFinished}
			<p class="text-center">
				<span class="text-lg font-semibold">{$_('a-default.activity-finished')}</span>
			</p>
		{:else}
			<p class="text-center">
				{#if isActivityStartInThePast}
					{$_('a-default.began')}
				{:else}
					{$_('a-default.begins')}
				{/if}
				{' '}
				<!-- TODO: add tooltip with full ISO date -->
				<HighlightedSpan variants={{ dateStatus }}>{formatDate(activity.startDate)}</HighlightedSpan
				>{' '}
				{$_('a-default.and-ends')}{' '}
				<HighlightedSpan variants={{ dateStatus }}>{formatDate(activity.endDate)}.</HighlightedSpan
				>{' '}
			</p>
		{/if}
		{#if enrollmentStatus === 'ENDED' && !isActivityFinished}
			<p class="text-center text-sm">
				{$_('a-default.enrollments.are')}{' '}
				<HighlightedSpan variants={{ dateStatus: enrollmentStatus }}
					>{$_('a-default.enrollments.closed')}.</HighlightedSpan
				>
			</p>
		{/if}
		{#if enrollmentStatus === 'NOT_STARTED' && !isActivityFinished}
			<p class="text-center text-sm">
				{$_('a-default.enrollments.will-open')}{' '}
				<HighlightedSpan variants={{ dateStatus: enrollmentStatus }}>
					{formatDate(activity.enrollmentStartDate)}.
				</HighlightedSpan>
			</p>
		{/if}
		{#if enrollmentStatus === 'OPEN' && !isActivityFinished}
			<p class="text-center text-sm">
				{$_('a-default.enrollments.are')}{' '}
				<HighlightedSpan variants={{ dateStatus: enrollmentStatus }}>
					{$_('a-default.enrollments.open')}
					{$_('a-default.enrollments.until')}
					{formatDate(activity.enrollmentEndDate)}
				</HighlightedSpan>
			</p>
		{/if}
	</div>
	{#if activity.locationPresential}
		<div class="flex items-center gap-1.5">
			<IconMapPin class="w-5 flex-none font-bold text-blue-500" />
			<p>{activity.locationPresential}</p>
		</div>
	{/if}
	<div class="flex gap-2">
		<Button variants={{ intent: 'ghost' }} class="w-full flex-shrink text-secondary">
			{$_('a-default.buttons.message-professor')}
		</Button>
		<!-- <Button class="w-full flex-shrink" to={`${ActivitiesRoute}/${activity.id}`}> -->
		<Button class="w-full flex-shrink" to="/">
			{$_('a-default.buttons.see-details')}
		</Button>
	</div>
</div>
