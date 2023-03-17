import { z } from 'zod';
import { base } from './_base';

export const userUpdateSchema = z.object({
	name: base.strings.short,
	email: base.strings.email,
	phone: base.strings.short,
	image: base.strings.url.nullable().or(z.literal(''))
});

const basePasswordSchema = z.object({
	currentPwd: base.strings.short,
	newPwd: base.strings.password,
	confirmPwd: base.strings.short
});

export const passwordResetSchema = z.object({
	token: base.strings.short,
	newPwd: base.strings.password,
	confirmPwd: base.strings.short
});

export const passwordUpdateSchema = basePasswordSchema.superRefine(
	({ confirmPwd, newPwd }, ctx) => {
		if (confirmPwd !== newPwd) {
			ctx.addIssue({
				code: 'custom',
				path: ['confirmPwd'],
				message: 'zod.password.mismatch'
			});
		}
	}
);

export const passwordCreateSchema = basePasswordSchema
	.omit({ currentPwd: true })
	.superRefine(({ confirmPwd, newPwd }, ctx) => {
		if (confirmPwd !== newPwd) {
			ctx.addIssue({
				code: 'custom',
				path: ['confirmPwd'],
				message: 'zod.password.mismatch'
			});
		}
	});

export const formPasswordResetSchema = passwordResetSchema
	.omit({ token: true })
	.superRefine(({ confirmPwd, newPwd }, ctx) => {
		if (confirmPwd !== newPwd) {
			ctx.addIssue({
				code: 'custom',
				path: ['confirmPwd'],
				message: 'zod.password.mismatch'
			});
		}
	});
