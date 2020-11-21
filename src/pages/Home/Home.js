import React from 'react';
import './Home.css';

import Product from '../../components/Product/Product';

const Home = () => {
  return (
    <div className='home'>
      <div className="home__container">

        <img
          className='home__image'
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-3154_SVOD_DiamondFallBack_Nov/Amazon_GW_DesktopTallHero_RB-3154_SVOD_DiamondFallBack_Nov_1500x600._CB418721851_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id='B006HP7GA4'
            title='On The Rock Glass with Ice Ball Maker'
            price={19.99}
            image='https://images-na.ssl-images-amazon.com/images/I/41f4-ZDz0jL._AC_.jpg'
            rating={3}
          />
          <Product
            id='B007ZH5LQE'
            title='Nemat Fragrances - Amber'
            price={17.49}
            image='https://images-na.ssl-images-amazon.com/images/I/41RZ5kO3koL.jpg'
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id='B01KJEOCDW'
            title='LEGO Creator Mighty Dinosaurs 31058 Build It Yourself Dinosaur Set, Create a Pterodactyl, Triceratops and T Rex Toy (174 Pieces)'
            price={11.99}
            image='https://images-na.ssl-images-amazon.com/images/I/91DCcqMAlzL._AC_SL1500_.jpg'
            rating={5}
          />
          <Product
            id='B07JJWYQN7'
            title='Succulent Plant Pots - 3 Inch Small Ceramic Mandala Planter Containers for Flowers or Cactus with Drainage Hole and Bamboo Tray, Set of 3'
            price={21.90}
            image='https://images-na.ssl-images-amazon.com/images/I/71byIq6AULL._AC_SL1500_.jpg'
            rating={5}
          />
          <Product
            id='B07JC9X8JL'
            title='Mkono Plant Stand - EXCLUDING Plant Pot, Mid Century Wood Flower Pot Holder Potted Stand Indoor Display Rack Rustic Decor, Up to 10 Inch Planter, Natural'
            price={23.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71Bqannpl1L._AC_SL1426_.jpg'
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id='B07B48CFDR'
            title='AMOYSTONE 1Pair Teal Agate Bookends 2-3 lbs for Books Small Cut Agate Stone Dyed with Rubber Bumpers'
            price={27.89}
            image='https://images-na.ssl-images-amazon.com/images/I/71U7ThNmMrL._AC_SL1500_.jpg'
            rating={4}
          />
        </div>

      </div>
    </div>
  )
}

export default Home
