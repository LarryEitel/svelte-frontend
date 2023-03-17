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
		prerequisites: base.strings.large,
		visibility: base.enums.visibilityType,
		modality: base.enums.modalityType,
		startDate: base.dates.future,
		endDate: base.dates.future
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
	.superRefine(({ modality, locationPresential, locationRemote }) => {
		if (modality === 'PRESENTIAL' && !locationPresential) {
			return {
				code: z.ZodIssueCode.custom,
				message: 'zod.string.required',
				path: ['locationPresential']
			};
		}

		if (modality === 'REMOTE' && !locationRemote) {
			return {
				code: z.ZodIssueCode.custom,
				message: 'zod.string.required',
				path: ['locationRemote']
			};
		}
	});
