import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'pt-BR'

register('pt-BR', () => import('./locales/pt-BR.json'))
register('en', () => import('./locales/en.json'))

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale,
})