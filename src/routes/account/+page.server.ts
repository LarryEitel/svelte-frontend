import { prisma } from '$lib/server/singletons';
import { createContext } from '$lib/trpc/context';
import { appRouter } from '$lib/trpc/router';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	return {
		verifications: await appRouter.createCaller(await createContext(event)).user.getVerifications()
	};
};

export const actions: Actions = {
	updateName: async (event) => {
		const userId = (await event.locals.getSession())?.user.id;
		if (userId) {
			const data = await event.request.formData();
			const name = data.get('name') as string;
			if (name) {
				await prisma.user.update({
					where: { id: userId },
					data: { name }
				});
			}
		}
	}
};
