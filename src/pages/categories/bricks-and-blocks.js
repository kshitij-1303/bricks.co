import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../components/style.css";

const bricksProducts = [
  {
    name: "MKS Karimnagar Red Brick",
    price: 30.0,
    img: "/BricksImages/MKS.jpg",
  },
  {
    name: ' ACC Aerobild 600 x 200 x 100 (4")',
    price: 45.0,
    img: "/BricksImages/Aerobild.jpg",
  },
  {
    name: "Greenstone’s AAC Brick 600x200x100mm",
    price: 45.0,
    img: "/BricksImages/greenstone.jpg",
  },
  {
    name: "SKB Brick 600 x 200 x 100 ",
    price: 9.0,
    img: "/BricksImages/skb.jpg",
  },
  {
    name: "Rajahmundry Light Weight Red Brick – 9in x 4in x 3in",
    price: 25.0,
    img: "/BricksImages/rajahmundry.jpg",
  },
  {
    name: 'Real Rock AAC Blocks 600x200x100mm (4")',
    price: 60.0,
    img: "/BricksImages/realrock.jpg",
  },
  {
    name: "Puja Red Brick – 9 x 4 x 3",
    price: 50.0,
    img: "/BricksImages/puja.jpg",
  },
  {
    name: "SAI Fly Ash Bricks",
    price: 11.8,
    img: "/BricksImages/SAI_Fly_ASH.jpg",
  },
  {
    name: "HERO Clay Brick – 9in x 4in x 3in",
    price: 7.0,
    img: "/BricksImages/hero.jpg",
  },
  {
    name: "Sangam Red Rectangular Brick",
    price: 20.0,
    img: "/BricksImages/sangam.jpg",
  },
  {
    name: "Birla Aerocon AAC Blocks 9 inch",
    price: 23.0,
    img: "5/BricksImages/birla.jpg",
  },
];
export default function BricksAndBlocks() {
  return (
    <div className="app">
      <Navbar />
      <div className="product-grid">
        {bricksProducts.map((bricksProducts, index) => (
          <div key={index} className="product-card">
            <img src={bricksProducts.img} alt={bricksProducts.name} />
            <h3>{bricksProducts.name}</h3>
            <p>₹ {bricksProducts.price}</p>
            <button className="add-btn">ADD</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
