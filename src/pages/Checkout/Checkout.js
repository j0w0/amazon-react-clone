import React from 'react';
import './Checkout.css';

import { useStateValue } from '../../StateProvider';
import Subtotal from '../../components/Subtotal/Subtotal';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';

const Checkout = () => {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>

      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">
            Your Shopping Cart
          </h2>

          {basket.map((item, idx) => {
            const { id, title, image, price, rating } = item;
            return <CheckoutProduct
              id={id}
              title={title}
              image={image}
              price={price}
              rating={rating}
              key={`${id}-${idx}`}
            />
          })}

        </div>
      </div>

      <div className="checkout__left">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout
