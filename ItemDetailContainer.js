import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import ItemDetail from './ItemDetail';
import './item.css';

function ItemDetailContainer() {
	const [loading, setLoading] = useState(false);
	const [product, setProduct] = useState([]);
	const { id } = useParams();

	async function getData() {
		setLoading(true);
		const ref  = doc(db, 'starwars', id);
		const snap = await getDoc(ref);
		if(snap.exists()) {
			setProduct(snap.data())
		}
		else {
			setProduct({
				id: '0',
				nombre: 'Error',
				images: 'images/error.jpg',
				price: '0',
				stock: '0',
				initial: 0,
			});
		}
		setLoading(false);
	}

	useEffect(() => {
		getData();
	}, []);

	return loading
		? <h2>Cargando..</h2>
		: (
			<div className="BoxCounter">
				<ItemDetail item={product} />
			</div>
		);
}

export default ItemDetailContainer;
