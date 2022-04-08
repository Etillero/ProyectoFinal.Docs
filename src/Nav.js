import React from 'react';
import './header.css';
import { BsCartFill } from "react-icons/bs";
import {Link} from 'react-router-dom';
import { UseCartContext } from './CartContext';



function Nav({links}) {
    const { IconCart, CartList } = UseCartContext();             
    return (
        <div className="Menu">

            
          
            <ul>
            <img style={{height:"65px", width:"169", float:"left", padding:"0px", }} src="/images/logo.png" alt="logo"/>
                <li><Link  to="/">Home</Link></li>

{links.map((link) => (<li key={link.id}><Link  to={`${link.url}`}>{link.nombre}</Link></li>))}

<li className="carWidget"><Link style={{padding:"15px 20px"}}to="/cart"><BsCartFill/></Link></li>
{CartList.length < 1 ? "" : <h2 style={{color:"blue", padding:"30px 0", float:"right"}}>{IconCart()}</h2>}

            </ul>
           
        </div>
    )
}

export default Nav
