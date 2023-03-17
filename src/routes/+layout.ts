import '$lib/i18n';
import { browser } from '$app/environment';
import { locale, waitLocale } from 'svelte-i18n';
import { theme } from '$lib/stores';
import { getThemeFromCookie } from '$lib/stores/theme.store';

export const load = async ({ data, fetch }) => {
	if (browser) {
		// data.theme will be undefined if the page is prerendered. In that case, we get the theme from the cookie.
		if (!data.theme) {
			theme.set(getThemeFromCookie() || 'winter');
			document.body.setAttribute('data-theme', getThemeFromCookie() || 'winter');
		} else {
			theme.set(data.theme || 'winter');
			document.body.setAttribute('data-theme', data.theme || 'winter');
		}
		locale.set(data.lang || window.navigator.language);

		if (!data.lang) {
			fetch('/api/locale', {
				method: 'PUT',
				body: JSON.stringify({ lang: window.navigator.language })
			});
		}
	}
	await waitLocale(data.lang);
};
