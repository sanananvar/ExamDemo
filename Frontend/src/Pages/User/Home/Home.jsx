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
        <section id="hero">
            <div className="hero-content">
              <h6>Spring / Summer Collection 2017</h6>
              <h1>Get up to 30% Off New Arrivals</h1>
              <button>ShopNow</button>
            </div>
        </section>
        <section id="banner">
          <div className="banner">
              <div className="banner-content">
                <div className="banner-img">
                  <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg.webp" alt="" />
                  <span className="ban-wom">Woomans</span>
                </div>
                <div className="banner-img">
                  <img src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg.webp" alt="" />
                  <span className="ban-accesories">Accesories</span>
                </div>
                <div className="banner-img">
                  <img src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg.webp" alt="" />
                  <span className="ban-men">Mens</span>
                </div>
              </div>
          </div>
        </section>
        <section id="products">
          <h2>New Arrivals</h2>
          <div className="line"></div>
          <div className="categories">
            <div className="category All">All</div>
            <div className="category">Womens</div>
            <div className="category">Accesories</div>
            <div className="category ">Mens</div>
          </div>
          <div className="product-wrapper">
            {products.length > 0 ? (
              products.map((req) => (
                <div key={req._id} className="card">
                  <img className="card-img" src={req.image} alt="" />
                  <span>{req.name}</span>
                  <span className="price">${req.price}</span>
                  <button onClick={()=>handleAddBasket(products)} className="add-cart">add to cart  </button>
                </div>
              ))
            ) : (
              <p>yoxdur</p>
            )}
          </div>
        </section>
        <section id="DayOFWeek">
            <div className="week-wrapper">
              <div className="day-img"><img src="https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png.webp" alt="" /></div>
              <div className="time">
                  <h2>Birtday</h2>
                  <div className="line"></div>
                  <div className="time-rounds">
                    <span>21</span>
                    <span>00:00</span>
                    <span>12</span>
                    <span>2004</span>
                  </div>
                  <button>Shop Now</button>
              </div>
            </div>
        </section>
        <section id="Blog">

          

        </section>
      </main>
    </>
  );
}

export default Home;
