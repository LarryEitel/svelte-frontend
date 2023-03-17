import { DateTime } from 'luxon';
import { z } from 'zod';

export const MAX_LENGTH_SHORT_STRINGS = 255;
export const MAX_LENGTH_LARGE_STRINGS = 1000;

const stringDefault = z
	.string({ required_error: 'zod.string.required', invalid_type_error: 'zod.string.required' })
	.min(1, 'zod.string.required');

const stringShort = stringDefault.max(MAX_LENGTH_SHORT_STRINGS, 'zod.string.max');
const stringLarge = stringDefault.max(MAX_LENGTH_LARGE_STRINGS, 'zod.string.max');

const baseDatetimeTransform = stringDefault.transform((v, ctx) => {
	if (!DateTime.fromISO(v).isValid) {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			message: 'zod.date.invalid'
		});
	}

	return v;
});

export const base = {
	enums: {
		visibilityType: z.enum(['', 'PUBLIC', 'PRIVATE'], {
			required_error: 'zod.select.invalid',
			invalid_type_error: 'zod.select.invalid'
		}),
		modalityType: z.enum(['', 'PRESENTIAL', 'REMOTE', 'HYBRID'], {
			required_error: 'zod.select.invalid',
			invalid_type_error: 'zod.select.invalid'
		}),
		verificationType: z.enum(['VALIDATE_EMAIL', 'VALIDATE_PHONE', 'RESET_PASSWORD'])
	},
	booleans: {
		default: z.boolean().default(false)
	},
	dates: {
		default: baseDatetimeTransform,
		future: baseDatetimeTransform.transform((v, ctx) => {
			if (DateTime.fromISO(v).diffNow().milliseconds < 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: 'zod.date.past'
				});
			}

			return v;
		})
	},
	selects: {
		default: z
			.string({ required_error: 'zod.select.invalid', invalid_type_error: 'zod.select.invalid' })
			.min(1, 'zod.select.invalid')
			.max(255, 'zod.select.invalid')
	},
	strings: {
		short: stringShort,
		large: stringLarge,
		email: stringShort.email('zod.email.invalid'),
		password: z
			.string()
			.min(8, 'zod.password.min')
			.max(255, 'zod.string.max')
			.refine((v) => /[A-Z]/.test(v), 'zod.string.uppercase')
			.refine((v) => /[a-z]/.test(v), 'zod.string.lowercase')
			.refine((v) => /[0-9]/.test(v), 'zod.string.numeric')
			.refine((v) => /[^A-Za-z0-9]/.test(v), 'zod.string.symbol'),
		url: stringLarge.url('zod.url.invalid')
	}
} as const;
