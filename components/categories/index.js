import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../categories/categories.module.css";

const Categories = ({ categories }) => {
  return (
    <div className={styles["categories-container"]}>
      {categories.map((category, i) => (
        <Link href={`/c?category=${category.name}`} key={i}>
          <div className={styles["category-item"]}>
            <Image src={category.imageUrl} width={240} height={260} />
            <h3 className={styles["category-item-name"]}>{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
