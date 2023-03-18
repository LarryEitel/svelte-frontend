<script lang="ts">
	import PhMapPin from '~icons/ph/map-pin';
	import { loadGooglePlacesLibrary } from '$lib/utils';
	import { createEventDispatcher, onMount } from 'svelte';
	import { inputStyles } from './text-styles';
	import TextInput from './TextInput.svelte';

	export let label = '';
	export let id: string;
	export let placeholder: string;
	export let address: string | undefined;
	export let error = '';

	const dispatch = createEventDispatcher();

	let inputField: HTMLInputElement;

	onMount(() => {
		loadGooglePlacesLibrary(() => {
			// eslint-disable-next-line no-undef
			const autocomplete = new google.maps.places.Autocomplete(inputField, {
				fields: ['formatted_address']
			});

			autocomplete.addListener('place_changed', () => {
				const place = autocomplete.getPlace();
				// There are circumstances where the place_changed event fires, but we
				// were NOT given location data. I only want to propagate the event if we
				// truly received location data from Google.
				// See the `Type something, no suggestions, hit Enter` test case.
				if (place?.formatted_address) {
					setSelectedLocation(inputField.value);
				}
			});

			dispatch('ready');
		});

		return () => {
			address = undefined;
		};
	});

	function emptyLocationField() {
		inputField.value = '';
		onChange();
	}

	function onChange() {
		if (inputField.value === '') {
			setSelectedLocation(null);
		}
	}

	function onKeyDown(event: KeyboardEvent) {
		const suggestionsAreVisible = document.getElementsByClassName('pac-item').length;

		if (event.key === 'Enter' || event.key === 'Tab') {
			if (suggestionsAreVisible) {
				const isSuggestionSelected = document.getElementsByClassName('pac-item-selected').length;
				if (!isSuggestionSelected) {
					selectFirstSuggestion();
				}
			} else if (address !== inputField.value) {
				setTimeout(emptyLocationField, 10);
			}
		} else if (event.key === 'Escape') {
			setTimeout(emptyLocationField, 10);
		}

		if (suggestionsAreVisible) {
			if (event.key === 'Enter') {
				/* When suggestions are visible, don't let an 'Enter' submit a form (since
				 * the user is interacting with the list of suggestions at the time, not
				 * expecting their actions to affect the form as a whole). */
				event.preventDefault();
			}
		}
	}

	function selectFirstSuggestion() {
		// Simulate the 'down arrow' key in order to select the first suggestion:
		// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
		const simulatedEvent = new KeyboardEvent('keydown', {
			key: 'ArrowDown',
			code: 'ArrowDown',
			keyCode: 40
		});
		inputField.dispatchEvent(simulatedEvent);
	}

	function setSelectedLocation(text: string | null) {
		address = text || '';
		dispatch('place_changed');
	}
</script>

<TextInput {id} {label} {error}>
	<PhMapPin slot="icon" />
	<input
		{placeholder}
		bind:this={inputField}
		class={inputStyles({ intent: error ? 'error' : 'primary' }) + ' rounded-l-none'}
		on:change={onChange}
		on:keydown={onKeyDown}
		{id}
		data-testid={`${id}-input`}
	/>
</TextInput>
