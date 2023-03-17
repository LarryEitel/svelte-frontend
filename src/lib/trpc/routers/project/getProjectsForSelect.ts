import { prisma } from '$lib/server/singletons';
import { publicProcedure } from '$lib/trpc/t';

export const getProjectsForSelect = publicProcedure.query(async () => {
	const projects = await prisma.project.findMany({
		select: {
			id: true,
			title: true,
			visibility: true,
			Faculty: {
				select: {
					id: true,
					acronym: true
				}
			}
		},
		orderBy: {
			createdAt: 'desc'
		}
	});

	return projects.map((project) => ({
		id: project.id,
		title: `${project.Faculty.acronym} | ${project.title}`,
		visibility: project.visibility,
		facultyId: project.Faculty.id
	}));
});
