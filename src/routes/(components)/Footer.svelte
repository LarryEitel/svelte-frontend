<script lang="ts">
	import { Button, Menu } from '$lib/components';
	import { _, locale } from 'svelte-i18n';
	import IconSun from '~icons/ph/sun-fill';
	import IconMoon from '~icons/ph/moon-fill';
	import IconCircleHalf from '~icons/ph/circle-half-fill';
	import IconBrazil from '~icons/twemoji/flag-brazil';
	import IconUnitedStates from '~icons/twemoji/flag-united-states';
	import { theme, type Theme } from '$lib/stores/theme.store';

	function handleSaveLocale(lang: string) {
		fetch('/api/locale', {
			method: 'PUT',
			body: JSON.stringify({ lang })
		});

		locale.set(lang);
	}

	function handleSaveTheme(newTheme: Theme | 'system') {
		if (newTheme === 'system') {
			newTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'winter';

			fetch('/api/theme', {
				method: 'PATCH',
				body: JSON.stringify({ useSystemTheme: true })
			});
		} else {
			fetch('/api/theme', {
				method: 'PATCH',
				body: JSON.stringify({ useSystemTheme: false })
			});
		}
		theme.set(newTheme);
		fetch('/api/theme', {
			method: 'PUT',
			body: JSON.stringify({ theme: newTheme })
		});
		document.body.setAttribute('data-theme', newTheme || 'winter');
	}
</script>

<footer
	class={`z-[5] mt-20 flex flex-col rounded-t-2xl bg-base-200 bg-opacity-40 text-base-content`}
>
	<div class="flex flex-col items-start justify-around gap-12 p-8 sm:flex-row">
		<div class="flex h-36 flex-col justify-between">
			<Button variants={{ intent: 'no-style' }} to="/" class="text-3xl font-semibold">
				Extensionly
			</Button>
			<div class="flex flex-none flex-col gap-1 px-2">
				<Button variants={{ intent: 'text-base', size: 'sm' }} to={'/about'}>
					{$_('footer.about-us')}
				</Button>
				<Button
					variants={{ intent: 'text-base', size: 'sm' }}
					to="https://bitbucket.org/fell-lucas/extensionly-frontend/src/main"
				>
					{$_('footer.open-source')}
				</Button>
				<Button
					variants={{ intent: 'text-base', size: 'sm' }}
					to="https://plausible.extensionly.app/extensionly.app"
				>
					{$_('footer.public-analytics')}
				</Button>
			</div>
		</div>
		<div class="flex flex-col">
			<h6 class="mb-4 px-2 text-sm font-semibold">{$_('footer.legal')}</h6>
			<Button variants={{ intent: 'text-base', size: 'sm' }} to={'/legal/cookies'}>
				{$_('terms.cookies-policy')}
			</Button>
			<!-- {/* https://www.privacypolicies.com/live/4a9e0e1b-9515-4987-8b7a-de0316c0b09a */} -->
			<Button variants={{ intent: 'text-base', size: 'sm' }} to={'/legal/privacy'}>
				{$_('terms.privacy-policy')}
			</Button>
			<!-- {/* https://www.termsandconditionsgenerator.com/live.php?token=Ob89qlaVSUUa8FhUBBCsJ5uYczADSFKG */} -->
			<Button variants={{ intent: 'text-base', size: 'sm' }} to={'/legal/terms'}>
				{$_('terms.terms-and-conditions')}
			</Button>
		</div>
	</div>
	<div
		class="flex flex-col items-center justify-center gap-4 bg-base-300 bg-opacity-30 p-2 px-4 sm:flex-row sm:justify-evenly"
	>
		<span class="text-center text-sm">{$_('footer.reserved')}</span>
		<div class="flex gap-6">
			<Menu
				trigger={$_('terms.language')}
				triggerId="language-switcher"
				items={[
					{
						text: 'Português',
						icon: IconBrazil,
						action: () => handleSaveLocale('pt-BR'),
						id: 'language-pt'
					},
					{
						text: 'English',
						icon: IconUnitedStates,
						action: () => handleSaveLocale('en'),
						id: 'language-en'
					}
				]}
			/>
			<Menu
				trigger={$_('terms.theme')}
				triggerId="theme-switcher"
				items={[
					{
						text: $_('terms.light'),
						icon: IconSun,
						action: () => handleSaveTheme('winter'),
						id: 'theme-light'
					},
					{
						text: $_('terms.dark'),
						icon: IconMoon,
						action: () => handleSaveTheme('night'),
						id: 'theme-dark'
					},
					{
						text: $_('terms.system'),
						icon: IconCircleHalf,
						action: () => handleSaveTheme('system'),
						id: 'theme-system'
					}
				]}
			/>
		</div>
	</div>
</footer>
