import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { basketContext } from "../../../Context/BasketContext";

function Home() {
  const [products, setProducts] = useState([]);
  let {basket,setBasket}=useContext(basketContext)
  function GetData() {
    axios.get("http://localhost:3000/Products").then((res) => {
      setProducts(res.data);
    });
  }
  function handleAddBasket(products){
    let findBasket=basket.find(item=>item.id==products.id)
    if(findBasket){
        findBasket.count++
        setBasket([...basket])
    }else{
        setBasket([...basket,{...products,count:1}])
       
    }
}

  useEffect(() => {
    GetData();
  }, []);
  console.log(products);

  return (
    <>
      <main>
        <section id="hero"></section>
        <section id="products">
          <h2>New Arrivals</h2>
          <div className="product-wrapper">
            {products.length > 0 ? (
              products.map((req) => (
                <div key={req._id} className="card">
                  <img className="card-img" src={req.image} alt="" />
                  <span>{req.name}</span>
                  <span className="price">${req.price}</span>
                  <button onClick={()=>handleAddBasket(products)} className="add-cart">add to cart</button>
                </div>
              ))
            ) : (
              <p>yoxdur</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
