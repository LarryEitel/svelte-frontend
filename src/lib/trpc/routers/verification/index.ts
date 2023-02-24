import { router } from '$lib/trpc/t';
import { createVerification } from './createVerification';
import { getVerifications } from './getVerifications';
import { checkVerificationByToken } from './checkVerificationByToken';
import { checkVerificationByEmail } from './checkVerificationByEmail';
import { getUserByToken } from './getUserByToken';

export const verificationRouter = router({
	createVerification,
	getVerifications,
	checkVerificationByToken,
	checkVerificationByEmail,
	getUserByToken
});
