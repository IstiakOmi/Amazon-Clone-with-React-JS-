import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* Products -> id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="123321"
          title="The Lean Startp: Some demo text will be here"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />

        <Product
          id="123421"
          title="The Lean Startp: Some demo text will be here"
          price={11.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123321"
          title="The Lean Startp: Some demo text will be here"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/warehousedeals/storefront/XCM_Manual_1186139_Amazon_Warehouse___Storefront_content_grid_440x440_Warehouse_Deals_XCM_Manual_1186139_878824_us_warehouse_deals_440x440_1566448377_jpg._CB437699424_.jpg"
        />

        <Product
          id="123321"
          title="The Lean Startp: Some demo text will be here"
          price={11.99}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img16/Beauty/Revamp/BCP/Final/Makeup_PC._V275175115_.jpg"
        />
        <Product
          id="123321"
          title="The Lean Startp: Some demo text will be here"
          price={11.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123321"
          title="The Lean Startp: Some demo text will be here"
          price={11.99}
          rating={5}
          image="https://www.mobiledekho.com/wp-content/uploads/2018/01/952x501-3-5.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
