function useSort(items: any[], sort: string) {
	if (sort === 'DESC') {
		return items.sort((a, b) => a.id - b.id)
	}
	if (sort === 'ASC') {
		return items.sort((a, b) => b.id - a.id)
	}
	return items
}

export default useSort;
