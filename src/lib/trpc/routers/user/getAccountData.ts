import { prisma } from '$lib/server/singletons';
import { authProcedure } from '$lib/trpc/t';

export const getAccountData = authProcedure.query(async ({ ctx }) => {
	const { id } = ctx.session.user;

	const user = await prisma.user.findUniqueOrThrow({
		where: { id },
		select: {
			name: true,
			email: true,
			phone: true,
			image: true,
			password: true,
			Verification: {
				select: {
					type: true,
					isVerified: true,
					liftCooldownAt: true
				}
			}
		}
	});

	const isPasswordEmpty = user.password === null;

	return {
		name: user.name,
		email: user.email,
		phone: user.phone,
		image: user.image,
		Verification: user.Verification,
		isPasswordEmpty
	};
});
