import Image from "next/image";
import React from "react";
import styles from "../search-item/searchItem.module.css";

const SearchItem = ({
  title,
  imageUrl,
  imgWidth = 80,
  imgHeight = 120,
  alignItems = "center",
}) => {
  return (
    <div
      className={styles["search-item-container"]}
      style={{ alignItems: alignItems }}
    >
      <Image src={imageUrl} width={imgWidth} height={imgHeight} />
      <p className={styles["s-item-title"]}>{title}</p>
    </div>
  );
};

export default SearchItem;
