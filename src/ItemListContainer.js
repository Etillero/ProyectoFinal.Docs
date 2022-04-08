import React, { useEffect, useState } from "react";
import "./item.css";
import { db} from "./firebase";
import { collection, getDocs } from 'firebase/firestore/lite';
import ItemList from "./ItemList";


function Items({nombre,price}) {
  return (
    <div>
   <h1>{nombre}</h1>

   <h2>{price}</h2>
   </div>
    )
}




function ItemListContainer() {

  
  const [result,setResult] = useState([]);


  async function  fetchData(db) {
    const coll = collection(db, 'starwars');
    const snap = await getDocs(coll);
    const list = snap.docs.map(doc => doc.data());
    console.log(list);
    setResult (list);

}

  useEffect(() => {
   fetchData (db)
    

      

  }, []);

 return (
   <div>

     {result.length === 0?(<h1>cargando..</h1>):(
      ( <ItemList products={result}/> ) 


     )}

   </div>
 )
 
}


export default ItemListContainer
