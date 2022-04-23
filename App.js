import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import Header from  './Header';
import './header.css';
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from './Cart';
import { createContext} from "react";
import CartContextProvider from "./CartContext";
import Contactos from "./Contactos";

const productList = [
  {id: 1,title: "Darth Vader",stock: 20,initial: 1,price: 100,image: "/images/darth-vader.jpg",category:"Figura de accion "},
  {id: 2,title: "Yoda",stock: 20,initial: 1,price: 250,image: "/images/yoda.jpg",category:"Figura de accion"},
  {id: 3,title: "Chewbacca",stock: 20,initial: 1,price: 95,image: "/images/chewbacca.jpg",category:"Figura de accion"},
  {id: 4,title: "Luke Skywalker",stock: 20,initial: 1,price: 250,image: "/images/luke-skywalker.jpg", category:"Figura de accion"},
  {id: 5,title: "Anakin Skywalker",stock: 20,initial: 1,price: 100,image: "/images/anakin-skywalker.jpg", category:"Figura de accion"},
  {id: 6,title: "Obi-Wan Kenobi",stock: 20,initial: 1,price: 95,image: "/images/obi-wan-kenobi.jpg", category:"Figura de accion"},
 
  
];

export const AppContext = createContext();

function App() {
  
  return (
    
    <CartContextProvider>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer productList={productList}/>}/>
        <Route path="/starwars/" element={<ItemListContainer productList={productList}/>}/>
        <Route path="/product/:id" element={<ItemDetailContainer productList={productList}/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contactos" element={<Contactos/>}/>
        

        </Routes>
</BrowserRouter>
</CartContextProvider>
  );
}
  

export default App;
