import React from "react";
import SearchItem from "../search-item";
import styles from "../search-results/searchResults.module.css";

const SearchResults = ({ query, hits }) => {
  return (
    <div className={styles["search-results-container"]}>
      <h2>{`Search Results For: ${query}`}</h2>
      <div className={styles["search-items"]}>
        {hits.map((hit, i) => (
          <SearchItem
            key={i}
            title={hit["Product Title"]}
            imageUrl={hit["Image URL"]}
            imgWidth={100}
            imgHeight={130}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
