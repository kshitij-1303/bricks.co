import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../components/style.css";
const toolsProducts = [
  {
    name: "Drill Machine 550W",
    price: 2089,
    img: "/ElectricalAppImg/Drill.jpeg",
  },
  {
    name: "Angle Grinder 850W",
    price: 3169,
    img: "/ElectricalAppImg/angleGrinder.jpeg",
  },
  {
    name: "Plasma Cutter 100Amp",
    price: 13000,
    img: "/ElectricalAppImg/plasmaCutter.jpeg",
  },
  {
    name: "Digital Multimeter",
    price: 1209,
    img: "/ElectricalAppImg/digitalmultimeter.jpeg",
  },
  {
    name: "Laser Level",
    price: 1998,
    img: "/ElectricalAppImg/laserlevel.jpeg",
  },
  {
    name: "Electrical Tapes 99mm",
    price: 165,
    img: "/ElectricalAppImg/electricalTapes.jpeg",
  },
  {
    name: "Power Cables 1.5M",
    price: 200,
    img: "/ElectricalAppImg/powercable.jpeg",
  },
  {
    name: "Earthing Rods",
    price: 494,
    img: "/ElectricalAppImg/earthingrods.png",
  },
  {
    name: "Tester LED Voltage",
    price: 1574,
    img: "/ElectricalAppImg/tester.jpeg",
  },
  {
    name: "LED Flood Light 200W",
    price: 355,
    img: "/ElectricalAppImg/floodlight.jpeg",
  },
  {
    name: "MCB 25 Amp Dual Pole",
    price: 799,
    img: "/ElectricalAppImg/mcb.jpeg",
  },
  {
    name: "Extension Board 6Amp",
    price: 126,
    img: "/ElectricalAppImg/extension.jpeg",
  },
  {
    name: "Portable Generator 1kVa",
    price: 20000,
    img: "/ElectricalAppImg/portablegen.webp",
  },
  {
    name: "Cut Off Saw 2200W",
    price: 4363,
    img: "/ElectricalAppImg/cutoff.jpeg",
  },
  {
    name: "Electric Tile Cutter 600W",
    price: 8259,
    img: "/ElectricalAppImg/angleGrinder.jpeg",
  },
  {
    name: "Electric Planer 82mm",
    price: 2350,
    img: "/ElectricalAppImg/electricalplanner.jpeg",
  },
  {
    name: "Wall Chaser 1400W",
    price: 9350,
    img: "/ElectricalAppImg/wallchaser.webp",
  },
  {
    name: "Cordless Screwdriver 4V",
    price: 1250,
    img: "/ElectricalAppImg/cordlessScrew.webp",
  },
  {
    name: "CCTV Cameras 1080P",
    price: 7490,
    img: "/ElectricalAppImg/cctv.jpeg",
  },
  {
    name: "Wi-Fi Routers C6 AC1200",
    price: 2379,
    img: "/ElectricalAppImg/wifirouters.jpeg",
  },
];

export default function ElectricalEquipment() {
  return (
    <div className="app">
      <Navbar />
      <div className="product-grid">
        {toolsProducts.map((toolsProducts, index) => (
          <div key={index} className="product-card">
            <img src={toolsProducts.img} alt={toolsProducts.name} />
            <h3>{toolsProducts.name}</h3>
            <p>₹ {toolsProducts.price}</p>
            <button className="add-btn">ADD</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
