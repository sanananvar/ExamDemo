import React, { useContext, useEffect, useState } from 'react';
import { basketContext } from '../../../Context/BasketContext';

function Basket() {
  const { basket, setBasket } = useContext(basketContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleDecrease = (item) => {
    if (item.count > 1) {
        item.count--;
        setBasket([...basket]);
    } else {
        const filtered = basket.filter((elem) => elem.id !== item.id);
        setBasket(filtered);
    }
};

const handleIncrease = (item) => {
    item.count++;
    setBasket([...basket]);
};

const handleDelete = (item) => {
    const filtered = basket.filter((elem) => elem.id !== item.id);
    setBasket(filtered);
};

const calcTotalPrice = () => {
    const total = basket.reduce((sum, item) => sum + item.price * item.count, 0);
    setTotalPrice(total);
};

useEffect(() => {
    calcTotalPrice();
}, [basket]);

  return (
    <div className="basket">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {basket.length > 0 ? (
            basket.map((item, index) => (
              <tr key={index}>
                <td className='img-td'>
                  <div className="basket-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity || 1}</td> 
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>
                Your basket is empty.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Basket;
