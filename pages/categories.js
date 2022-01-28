import React from "react";
import Categories from "../components/categories";
import Header from "../components/header";

function CategoriesPage({ categories }) {
  return (
    <div>
      <Header />
      <Categories categories={categories} />
    </div>
  );
}

export default CategoriesPage;

export async function getServerSideProps(context) {
  const categories = [
    {
      name: "Nano",
      imageUrl:
        "https://greatwall-sandbox-sandbox-image.imgix.net/5167496365/xpm/pi1.png?auto=compress",
    },
    {
      name: "Heavy Duty Engine Oils",
      imageUrl:
        "https://greatwall-sandbox-sandbox-image.imgix.net/5167496365/xpm/pi2.png?auto=compress",
    },
    {
      name: "Automotive Engine Oils",
      imageUrl:
        "https://greatwall-sandbox-sandbox-image.imgix.net/5167496365/xpm/3.png?auto=compress",
    },
    {
      name: "Gear Lubricants",
      imageUrl:
        "https://greatwall-sandbox-sandbox-image.imgix.net/5167496365/xpm/10.png?auto=compress",
    },
    {
      name: "Transmission Fluids",
      imageUrl:
        "https://greatwall-sandbox-sandbox-image.imgix.net/5167496365/xpm/5.png?auto=compress",
    },
    {
      name: "Hydraulic Fluids",
      imageUrl:
        "https://greatwall-sandbox-sandbox-image.imgix.net/5167496365/xpm/6.png?auto=compress",
    },
    {
      name: "Biodegradable Lubricants",
      imageUrl:
        "https://greatwall-sandbox-sandbox-image.imgix.net/5167496365/xpm/9.png?auto=compress",
    },
    {
      name: "Chemicals",
      imageUrl:
        "https://greatwall-sandbox-sandbox-image.imgix.net/5167496365/xpm/12.png?auto=compress",
    },
    {
      name: "Food Grade Lurbricants",
      imageUrl:
        "https://greatwall-sandbox-sandbox-image.imgix.net/5167496365/xpm/11.png?auto=compress",
    },
  ];

  return {
    props: {
      categories: categories,
    },
  };
}
