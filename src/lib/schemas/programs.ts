import { z } from 'zod';
import { base } from './_base';

export const createProgramSchema = z.object({
	title: base.strings.short,
	facultyId: base.selects.default,
	description: base.strings.large,
	visibility: base.enums.visibilityType
});
