export const searchHandler = <T extends Record<PropertyKey, string>>(query: string, items: T[]) => {
	const searchTerm = query.toLowerCase() || '';
	return items.filter((item) => {
		return item.searchTerms.toLowerCase().includes(searchTerm);
	});
};
