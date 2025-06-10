import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../components/style.css";
const metalProducts = [
  {
    name: "TMT Bars",
    description: "550 8mm",
    price: 381,
    unit: "per piece",
    img: "/SteelImages/TMTbars.jpg",
  },
  {
    name: "Mild Steel Plate",
    description: "0.8mm",
    price: 4086,
    unit: "per panel",
    img: "/SteelImages/mildsteel.jpg",
  },
  {
    name: "MS Channel",
    description: "Mild steel",
    price: 51600,
    unit: "per ton",
    img: "/SteelImages/mschannel.jpg",
  },
  {
    name: "Steel Rods",
    description: "5mm, 12 inches length",
    price: 815,
    unit: "per piece",
    img: "/SteelImages/steelrods.jpg",
  },
  {
    name: "Structural I-Beams",
    description: "Construction, 52/kg",
    price: 52,
    unit: "per kg",
    img: "/SteelImages/structural.jpg",
  },
  {
    name: "Binding Wire",
    description: "Steel binding wire",
    price: 575,
    unit: "per bundle",
    img: "/SteelImages/BindingWire.jpg",
  },
  {
    name: "Steel Pipes",
    description: "Round 446 stainless steel",
    price: 1200,
    unit: "per piece",
    img: "/SteelImages/steelPipes.jpg",
  },
  {
    name: "GI Sheets",
    description: "Coated roofing sheets",
    price: 90,
    unit: "per sheet",
    img: "/SteelImages/GISheets.jpg",
  },
  {
    name: "Aluminium Section",
    description: "19mm×19mm×1.2mm",
    price: 399,
    unit: "per section",
    img: "/SteelImages/AluminiumSection.jpg",
  },
  {
    name: "Steel Door Frames",
    description: "Powder Coated",
    price: 2100,
    unit: "per frame",
    img: "/SteelImages/SteelDoorsFrame.jpg",
  },
  {
    name: "Copper Sheets",
    description: "6 inch×6 inch",
    price: 285,
    unit: "per sheet",
    img: "/SteelImages/CopperSheets.jpg",
  },
  {
    name: "Metal Mesh",
    description: "GI wire mesh",
    price: 1500,
    unit: "per roll",
    img: "/SteelImages/metalmesh.jpg",
  },
  {
    name: "Perforated Metal Sheet",
    description: "3 mm",
    price: 1510,
    unit: "per sheet",
    img: "/SteelImages/perforatedmetalsheet.jpg",
  },
  {
    name: "Steel Grating",
    description: "2–3 meters",
    price: 1800,
    unit: "per piece",
    img: "/SteelImages/steelGrating.jpg",
  },
  {
    name: "CR Sheets",
    description: "3 mm thickness",
    price: 65,
    unit: "per kg",
    img: "/SteelImages/CRSheets.jpg",
  },
];
export default function SteelAndMetals() {
  return (
    <div className="app">
      <Navbar />
      <div className="product-grid">
        {metalProducts.map((metalProducts, index) => (
          <div key={index} className="product-card">
            <img src={metalProducts.img} alt={metalProducts.name} />
            <h3>{metalProducts.name}</h3>
            <p>{metalProducts.description}</p>
            <p>
              ₹ {metalProducts.price}/{metalProducts.unit}
            </p>
            <button className="add-btn">ADD</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
