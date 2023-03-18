import { z } from 'zod';
import { base } from './_base';
import { DateTime } from 'luxon';

export const createActivitySchema = z
	.object({
		title: base.strings.short,
		shortDescription: base.strings.short,
		description: base.strings.large,
		locationPresential: base.strings.short.optional(),
		locationRemote: base.strings.url.optional(),
		projectId: base.selects.default,
		facultyId: base.selects.default,
		prerequisites: base.strings.largeOptional,
		visibility: base.enums.visibilityType,
		modality: base.enums.modalityType,
		startDate: base.dates.future,
		endDate: base.dates.future,
		enrollmentStartDate: base.dates.future,
		enrollmentEndDate: base.dates.future,
		contact: base.strings.largeOptional
	})
	.superRefine(({ startDate, endDate }, ctx) => {
		const end = DateTime.fromISO(endDate);
		const start = DateTime.fromISO(startDate);

		if (start.diff(end).milliseconds > 0) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'zod.date.start-after-end',
				path: ['startDate']
			});
		}
	})
	.superRefine(({ modality, locationPresential, locationRemote }, ctx) => {
		if (modality !== 'REMOTE' && !locationPresential) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'zod.string.required',
				path: ['locationPresential']
			});
		}

		if (modality !== 'PRESENTIAL' && !locationRemote) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'zod.string.required',
				path: ['locationRemote']
			});
		}
	})
	.superRefine(({ enrollmentStartDate, enrollmentEndDate, startDate, endDate }, ctx) => {
		const start = DateTime.fromISO(startDate);
		const enrollmentStart = DateTime.fromISO(enrollmentStartDate);
		const enrollmentEnd = DateTime.fromISO(enrollmentEndDate);
		const end = DateTime.fromISO(endDate);

		// check if enrollment start and enrollment end dates are between start and end dates
		if (enrollmentStart.diff(start).milliseconds < 0) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'zod.date.enrollment-start-before-start',
				path: ['enrollmentStartDate']
			});
		}
		if (enrollmentStart.diff(end).milliseconds > 0) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'zod.date.enrollment-start-after-end',
				path: ['enrollmentStartDate']
			});
		}
		if (enrollmentEnd.diff(start).milliseconds < 0) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'zod.date.enrollment-end-before-start',
				path: ['enrollmentEndDate']
			});
		}
		if (enrollmentEnd.diff(end).milliseconds > 0) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'zod.date.enrollment-end-after-end',
				path: ['enrollmentEndDate']
			});
		}

		// check if enrollment start date is after now
		if (enrollmentStart.diffNow().milliseconds < 0) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'zod.date.enrollment-start-before-now',
				path: ['enrollmentStartDate']
			});
		}

		// check if enrollment end date is after enrollment start
		if (enrollmentStart.diff(enrollmentEnd).milliseconds > 0) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'zod.date.enrollment-start-after-enrollment-end',
				path: ['enrollmentStartDate']
			});
		}
	});
