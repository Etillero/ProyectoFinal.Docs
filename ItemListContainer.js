import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import ItemList from './ItemList';
import './item.css';

function ItemListContainer() {
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState([]);

	async function getData() {
		setLoading(true);
		let temp;
		const res = [];
		const snap = await getDocs(collection(db, 'starwars'));
		snap.forEach(doc => {
			temp = doc.data();
			res.push({
				id: doc.id,
				nombre: temp.nombre,
				images: temp.images,
				price: temp.price,
				stock: temp.stock,
				initial: temp.initial,
			});
		});
		setResult(res);
		setLoading(false);
	}

	useEffect(() => {
		getData();
	}, []);

	return loading
			? <h2>Cargando..</h2>
			: <ItemList products={result} />;
}

export default ItemListContainer;
