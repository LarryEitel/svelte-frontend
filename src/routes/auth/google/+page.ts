import { browser } from '$app/environment';
import { signIn } from '@auth/sveltekit/client';

export const load = async (page) => {
	if (browser) {
		document.body.style.overflow = 'hidden';
		if (!page.url.searchParams.get('close')) {
			signIn('google', { callbackUrl: '/auth/google?close=true' });
		} else {
			window.opener.location.reload();
			window.close();
		}
	}
	return page;
};
