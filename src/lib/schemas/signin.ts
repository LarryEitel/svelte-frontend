import { z } from 'zod';
import { _ } from 'svelte-i18n';

export const signinSchema = z.object({
  email: z
    .email({ message: $_('validations.email.invalid') }),
  password: z.string({ required_error: 'Password is required' })
});