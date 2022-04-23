import React from 'react'
import './item.css'
import{Link} from 'react-router-dom'

function Item({product}) {
    const {nombre, price, images, id} = product
    return (
        <div className= "itemBox">
            <h4>{nombre}</h4>
            <img src={images} alt={nombre}/>
            <p>Precio $ {price}</p>
            <Link to={`/product/${id}`}><button >Ver detalle del producto</button></Link> 
           {/*<h4>Stock disponible {stock}</h4>*/}
         </div>
    )
}

export default Item

