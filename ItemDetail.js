import { useState, useEffect } from 'react';
import { UseCartContext } from './CartContext';
import Counter from './Counter';
import './item.css';

function Item({ item }) {
	const { nombre, price, images, stock, initial } = item;
	const { AddItem, CartList } = UseCartContext();
	const [stock2, setStock2] = useState(stock);

	useEffect(() => {
		const index = CartList.findIndex(i => i.item.id === item.id);
		if(index > -1) {
			const oldStock = CartList[index].cantidad;
			setStock2(oldStock > stock ? 0 : stock - oldStock);
		}
		else {
			setStock2(stock);
		}
	});

	const onAdd = (cantidad) => {
		AddItem(item, cantidad);
	};

	return (
		<div className="itemBox2">
			<h4>{nombre}</h4>
			<img src={images} alt={nombre} />
			<p>Precio $ {price},</p>
			<Counter stock={stock2} initial={initial} onAdd={onAdd} />
			<h4>{stock2} Unidades Disponibles</h4>
		</div>
	);
}

export default Item;
