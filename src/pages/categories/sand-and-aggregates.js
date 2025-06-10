import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../components/style.css";
const sandAndAggregateProducts = [
  {
    name: "Sand Refined",
    price: 3500.0,
    unit: "Ton",
    img: "/SandImages/sandrefined.jpg",
  },
  {
    name: "Robo Sand",
    price: 1300.0,
    unit: "Ton",
    img: "/SandImages/robosand.jpg",
  },
  {
    name: "Sand (Not Refined)",
    price: 3500.0,
    unit: "Ton",
    img: "/SandImages/sandNR.jpg",
  },
  {
    name: "Robo Dust",
    price: 900.0,
    unit: "Ton",
    img: "/SandImages/robodust.webp",
  },
  {
    name: "Generic Aggregate - 25MM",
    price: 1500.0,
    unit: "Ton",
    img: "/SandImages/25mm.webp",
  },
  {
    name: "Pit Sand",
    price: 1520.0,
    unit: "Ton",
    img: "/SandImages/pitsand.jpg",
  },
  {
    name: "Wet Mix Macadam",
    price: 750.0,
    unit: "Ton",
    img: "/SandImages/wetmix.jpg",
  },
  {
    name: "Generic Aggregate 60mm",
    price: 1020.0,
    unit: "Ton",
    img: "/SandImages/gen60mm.jpeg",
  },
  {
    name: "6mm Crushed Stone Aggregate",
    price: 1260.0,
    unit: "Ton",
    img: "/SandImages/6mmcrushed.jpg",
  },
  {
    name: "Robo Plastering Sand",
    price: 1830.0,
    unit: "Ton",
    img: "/SandImages/roboplast.jpg",
  },
  {
    name: "Generic Aggregate - 12mm",
    price: 1150.0,
    unit: "Ton",
    img: "/SandImages/gen12.jpg",
  },
  {
    name: "Generic Aggregate - 40mm",
    price: 1025.0,
    unit: "Ton",
    img: "/SandImages/40mm.jpeg",
  },
];
export default function SandAndAggregates() {
  return (
    <div className="app">
      <Navbar />
      <div className="product-grid">
        {sandAndAggregateProducts.map((sandAndAggregateProducts, index) => (
          <div key={index} className="product-card">
            <img
              src={sandAndAggregateProducts.img}
              alt={sandAndAggregateProducts.name}
            />
            <h3>{sandAndAggregateProducts.name}</h3>
            <p>
              ₹ {sandAndAggregateProducts.price}/{sandAndAggregateProducts.unit}
            </p>
            <button className="add-btn">ADD</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
