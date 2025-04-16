import { useEffect, useState } from 'react';
import { Data } from '../types';

function useData() {
	const [items, setItems] = useState<Data[]>([]);

	function fetchItems() {
		fetch(`${process.env.API_URL}/items`)
			.then(res => res.json())
			.then(data => setItems(data))
			.catch(err => {
				console.error('Failed to fetch items', err);
			})
	}

	useEffect(() => {
		fetchItems();
		setInterval(fetchItems, 10000);
	}, []);

	return items;
}

export default useData;
