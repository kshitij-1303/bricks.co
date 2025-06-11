import React from "react";
import "../../components/style.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const products = [
  {
    name: "Ambuja Kawach",
    weight: "50 kg",
    price: 430,
    img: "/CementImages/ultratech.jpeg",
  },
  {
    name: "Ultratech Cement",
    weight: "50 kg",
    price: 380,
    img: "/CementImages/ultratech.jpeg",
  },
  {
    name: "General Purpose",
    weight: "25 kg",
    price: 210,
    img: "/CementImages/generalpurpose.jpg",
  },
  {
    name: "Chettinad Cement",
    weight: "50 kg",
    price: 250,
    img: "/CementImages/chettinad.jpg",
  },
  {
    name: "JSW Cement",
    weight: "50 kg",
    price: 330,
    img: "/CementImages/jsw.jpg",
  },
  {
    name: "JSW Cement Power Pro",
    weight: "50 kg",
    price: 290,
    img: "/CementImages/jswpowerpro.jpeg",
  },
  {
    name: "KCP Cement",
    weight: "50 kg",
    price: 320,
    img: "/CementImages/kcp.jpg",
  },
  {
    name: "Parashakti",
    weight: "50 kg",
    price: 305,
    img: "/CementImages/parashakti.jpeg",
  },
  {
    name: "Bamburi Cement",
    weight: "50 kg",
    price: 300,
    img: "/CementImages/bamburi.jpeg",
  },
  {
    name: "ACC Cement",
    weight: "50 kg",
    price: 395,
    img: "/CementImages/acc.jpg",
  },
  {
    name: "Birla Shakti Cement",
    weight: "50 kg",
    price: 360,
    img: "/CementImages/birlashakti.jpg",
  },
  {
    name: "Dalmia Cement",
    weight: "50 kg",
    price: 375,
    img: "/CementImages/dalmia.jpeg",
  },
  {
    name: "Shree Cement",
    weight: "50 kg",
    price: 340,
    img: "/CementImages/shree.webp",
  },
  {
    name: "India Cements",
    weight: "50 kg",
    price: 355,
    img: "/CementImages/ultratech.jpeg",
  },
  {
    name: "JK Cement",
    weight: "50 kg",
    price: 370,
    img: "/CementImages/india.png",
  },
  {
    name: "Ramco Cement",
    weight: "50 kg",
    price: 365,
    img: "/CementImages/ramco.jpeg",
  },
  {
    name: "Penna Cement",
    weight: "50 kg",
    price: 345,
    img: "/CementImages/penna.png",
  },
  {
    name: "Wonder Cement",
    weight: "50 kg",
    price: 390,
    img: "/CementImages/wonder.jpeg",
  },
  {
    name: "Heidelberg Cement",
    weight: "50 kg",
    price: 355,
    img: "/CementImages/heidelberg.png",
  },
  {
    name: "Maha Cement",
    weight: "50 kg",
    price: 345,
    img: "/CementImages/maha.jpeg",
  },
];

export default function CementAndConcrete() {
  return (
    <div className="app">
      <Navbar />
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.weight}</p>
            <p>₹ {product.price}/bag</p>
            <button className="add-btn">ADD</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
