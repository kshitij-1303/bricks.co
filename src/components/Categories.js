import React from "react";
import { Link } from "react-router-dom";

// Import all images
import bricksImage from "../assets/images-bricks.co/bricks.jpeg";
import cementImage from "../assets/images-bricks.co/cement.png";
import sandImage from "../assets/images-bricks.co/sand.jpeg";
import metalImage from "../assets/images-bricks.co/metal.jpeg";
import tilesImage from "../assets/images-bricks.co/tiles.jpg";
import pipesImage from "../assets/images-bricks.co/pipes.jpeg";
import electricalImage from "../assets/images-bricks.co/electrical.webp";
import paintsImage from "../assets/images-bricks.co/paints.jpeg";

const Categories = () => {
  const categoryData = [
    {
      id: 1,
      name: "Cement & Concrete",
      image: cementImage,
      alt: "Cement & Concrete",
    },
    {
      id: 2,
      name: "Bricks & Blocks",
      image: bricksImage,
      alt: "Bricks & Blocks",
    },
    {
      id: 3,
      name: "Sand & Aggregates",
      image: sandImage,
      alt: "Sand & Aggregates",
    },
    {
      id: 4,
      name: "Steel & Metals",
      image: metalImage,
      alt: "Steel & Metals",
    },
    {
      id: 5,
      name: "Tiles & Flooring",
      image: tilesImage,
      alt: "Tiles & Flooring",
    },
    {
      id: 6,
      name: "Pipes & Fittings",
      image: pipesImage,
      alt: "Pipes & Fittings",
    },
    {
      id: 7,
      name: "Electrical Equipment",
      image: electricalImage,
      alt: "Electrical Equipment",
    },
    {
      id: 8,
      name: "Paints & Tools",
      image: paintsImage,
      alt: "Paints & Tools",
    },
  ];

  const passRouteString = (name) => {
    const lowerCasedName = name.toLowerCase();
    const nameArray = lowerCasedName.split(" ");
    let routeString = "";
    if (nameArray.length === 3) {
      routeString = "/categories/" + nameArray[0] + "-and-" + nameArray[2];
    } else {
      routeString = "/categories/" + nameArray[0] + "-" + nameArray[1];
    }
    return routeString;
  };

  return (
    <div className="categories">
      <h1>Shop by category</h1>
      <div className="all-categories">
        {categoryData.map((category) => (
          <Link to={passRouteString(category.name)}>
            <div key={category.id} className="category">
              <img src={category.image} alt={category.alt} loading="lazy" />
              <p>{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
