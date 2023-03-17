<script lang="ts">
	import { Button } from '$lib/components';
	import { _ } from 'svelte-i18n';

	const people = [
		{
			name: 'Lucas Fell',
			social: 'https://www.linkedin.com/in/lucas-fell',
			handle: 'fell-lucas',
			description: $_('r-about.description-lucas'),
			tags: [
				$_('r-about.programming'),
				$_('r-about.reading'),
				$_('r-about.yerbamate'),
				'jazz',
				'star wars'
			],
			imageUrl: '/assets/lucas.avif'
		},
		{
			name: 'Igor Dalepiane',
			social: 'https://github.com/igordalepiane',
			handle: 'igordalepiane',
			description: $_('r-about.description-igor'),
			tags: [$_('r-about.microservices'), $_('r-about.programming'), 'gaming', 'netflix'],
			imageUrl: '/assets/igor.jpg'
		},
		{
			name: 'Maicon Bernardino',
			social: 'mailto:bernardino@unipampa.edu.br',
			handle: 'bernardino',
			description: $_('r-about.description-bernardino'),
			tags: [
				$_('r-about.teaching'),
				$_('r-about.software-engineering'),
				$_('r-about.cooking'),
				$_('r-about.cats')
			],
			imageUrl: '/assets/bernardino.jpg'
		}
	];
</script>

<article class="prose-slate prose mb-16">
	<h1 class="font-semibold">{$_('r-about.about-us')}</h1>
	<h3>{$_('terms.a')} Extensionly</h3>
	<p>{$_('r-about.p1')}</p>
	<h3>{$_('r-about.whoarewe')}</h3>
	<p>
		{$_('r-about.p2')}{' '}
		<a href="https://zallpy.com/en">Zallpy Digital.</a>
	</p>
</article>
<div class="flex flex-wrap items-center justify-center gap-6">
	{#each people as p}
		<div
			class="flex w-[600px] max-w-xs flex-col rounded-lg bg-base-300 shadow-lg md:max-w-2xl md:flex-row"
		>
			<div class="flex flex-1">
				<img
					alt={`Contributor ${p.name}`}
					class="aspect-auto max-w-xs rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
					src={p.imageUrl}
				/>
			</div>
			<div class="prose flex w-full flex-col items-center justify-evenly p-4 md:w-1/2">
				<h3>{p.name}</h3>
				<Button variants={{ intent: 'text' }} to={p.social}>
					{p.handle}
				</Button>
				<p class="text-center text-sm font-medium">{p.description}</p>
				<div class="flex flex-wrap justify-center gap-2 ">
					{#each p.tags as tag}
						<div class="rounded-md bg-base-200 p-1 px-2 uppercase leading-none">
							<span class="p-0 text-xs font-semibold">{tag}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
