import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../components/style.css";

const flooringProducts = [
  {
    name: "Matt Finish Ceramic Tiles",
    size: "300×300mm, Matt",
    price: 1240,
    unit: "per box",
    img: "/TilesImages/mattfinish.jpg",
  },
  {
    name: "Marble Flooring",
    size: "16mm",
    price: 200,
    unit: "per sq ft",
    img: "/TilesImages/marbleFlooring.jpg",
  },
  {
    name: "Designer 3D Wall Tiles",
    size: "304×304mm, Matt",
    price: 27000,
    unit: "per box",
    img: "/TilesImages/designer3d.jpg",
  },
  {
    name: "Granite Flooring",
    size: "15–20mm",
    price: 52,
    unit: "per sq ft",
    img: "/TilesImages/graniteflooring.jpg",
  },
  {
    name: "Epoxy Industrial Flooring",
    size: "1mm thickness, liquid form",
    price: 90,
    unit: "per sq ft",
    img: "/TilesImages/epoxy.jpg",
  },
  {
    name: "Stone Flooring",
    size: "Natural stone",
    price: 60,
    unit: "per sq ft",
    img: "/TilesImages/stonef.jpg",
  },
  {
    name: "Mosaic Tiles",
    size: "12×12, 10–14mm",
    price: 1035,
    unit: "per sq ft",
    img: "/TilesImages/mosaic.jpg",
  },
  {
    name: "Outdoor Parking Tiles",
    size: "12×12 inch, 8mm",
    price: 350,
    unit: "per tile",
    img: "/TilesImages/outdoorP.jpg",
  },
  {
    name: "Laminate Flooring",
    size: "1.5mm thick",
    price: 1999,
    unit: "per pack",
    img: "/TilesImages/laminatef.jpg",
  },
  {
    name: "PVC Flooring",
    size: "23 inch × 2 meter",
    price: 468,
    unit: "per roll",
    img: "/TilesImages/pvcf.jpg",
  },
  {
    name: "Concrete Polished Flooring",
    size: "200 sq ft",
    price: 8000,
    unit: "per job",
    img: "/TilesImages/concretep.webp",
  },
  {
    name: "Subway Tiles",
    size: "100×300mm, Matt",
    price: 1599,
    unit: "per box",
    img: "/TilesImages/subway.jpg",
  },
  {
    name: "Terracotta Tiles",
    size: "Red interior",
    price: 30,
    unit: "per tile",
    img: "/TilesImages/teracotta.jpg",
  },
  {
    name: "Engineered Wood Flooring",
    size: "Red interior",
    price: 1400,
    unit: "per box",
    img: "/TilesImages/enginered.jpg",
  },
  {
    name: "Leather Flooring",
    size: "8 ft",
    price: 2034,
    unit: "per roll",
    img: "/TilesImages/leatherf.jpg",
  },
];
export default function TilesAndFlooring() {
  return (
    <div className="app">
      <Navbar />
      <div className="product-grid">
        {flooringProducts.map((flooringProducts, index) => (
          <div key={index} className="product-card">
            <img src={flooringProducts.img} alt={flooringProducts.name} />
            <h3>{flooringProducts.name}</h3>
            <p>
              ₹ {flooringProducts.price}/{flooringProducts.unit}
            </p>
            <button className="add-btn">ADD</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
