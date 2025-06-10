import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../components/style.css";

const paintProducts = [
  {
    name: "Asian Paints Walnut Brown",
    price: 1159,
    unit: "per Litre",
    img: "/PaintImages/asianwalnut.jpg",
  },
  {
    name: "Dulux ICI Duwel Acrylic",
    price: 262,
    unit: "per Litre",
    img: "/PaintImages/duluxici.jpg",
  },
  {
    name: "Dulux Clean 3 In 1 Paint",
    price: 370,
    unit: "per Litre",
    img: "/PaintImages/duluxclean.jpg",
  },
  {
    name: "Berger Antifungal Emulsion",
    price: 1650,
    unit: "per Litre",
    img: "/PaintImages/burgeranti.jpg",
  },
  {
    name: "NIPPON PAINT SATIN ENAMEL",
    price: 1610,
    unit: "per Litre",
    img: "/PaintImages/nipponsatin.jpg",
  },
  {
    name: "Nerolac Suraksha Plus Paint",
    price: 1650,
    unit: "per Litre",
    img: "/PaintImages/nerosuraksha.jpg",
  },
  {
    name: "ASIAN Emulsion Paint",
    price: 5290,
    unit: "per Litre",
    img: "/PaintImages/asianemulsion.jpg",
  },
  {
    name: "Shalimar Paints",
    price: 300,
    unit: "per Litre",
    img: "/PaintImages/shalimarpaints.jpg",
  },
  {
    name: "Jotun Long-Lasting Exterior Paint",
    price: 6031,
    unit: "per Litre",
    img: "/PaintImages/jotunlong.jpg",
  },
  {
    name: "Indigo Floor Paint",
    price: 480,
    unit: "per Litre",
    img: "/PaintImages/indigofloor.jpg",
  },
  {
    name: "BSC Emulsion Paint",
    price: 350,
    unit: "per Litre",
    img: "/PaintImages/bscemulsion.jpg",
  },
  {
    name: "Kansai Nerolac Excel Mica Marble",
    price: 5500,
    unit: "per Litre",
    img: "/PaintImages/nerokansai.jpg",
  },
];
export default function PaintsAndTools() {
  return (
    <div className="app">
      <Navbar />
      <div className="product-grid">
        {paintProducts.map((paintProducts, index) => (
          <div key={index} className="product-card">
            <img src={paintProducts.img} alt={paintProducts.name} />
            <h3>{paintProducts.name}</h3>
            <p>
              ₹ {paintProducts.price}/{paintProducts.unit}
            </p>
            <button className="add-btn">ADD</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
