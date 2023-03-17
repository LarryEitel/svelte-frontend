import { router } from '$lib/trpc/t';
import { createProject } from './createProject';
import { getProjectsForSelect } from './getProjectsForSelect';

export const projectRouter = router({
	createProject: createProject,
	getProjectsForSelect: getProjectsForSelect
});
