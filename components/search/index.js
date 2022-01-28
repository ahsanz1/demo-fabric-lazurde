import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { fetchItems } from "../../lib/api/algolia";
import SearchItem from "../search-item";
import styles from "../search/search.module.css";

function Search({ setOpenSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const ENTER_KEY = "Enter";
  const router = useRouter();
  const onSubmitSearchQuery = (e) => {
    if (e && e.key === ENTER_KEY) {
      router.push({
        pathname: "/search",
        query: { query: searchQuery },
      });
    }
  };

  const handleSearchInputChange = async ({ value = "" }) => {
    setSearchQuery(value);
    setIsSearching(true);

    try {
      const algoliaRes = await fetchItems(value);
      const { hits = [] } = algoliaRes;
      setSearchResults(hits);
      setIsSearching(false);
    } catch (error) {
      console.log("Error fetching products: ", error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={styles.search_container}>
      <div className={styles.search_container_wrapper}>
        <div className={styles.search_input_wrapper}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => handleSearchInputChange(e.target)}
            onKeyDown={(e) => onSubmitSearchQuery(e)}
            className={styles.search_input}
          ></input>
          <Image
            src="/cancel.png"
            width={15}
            height={15}
            onClick={() => setOpenSearch(false)}
            className={styles.close_icon}
          />
        </div>
        {isSearching ? (
          <div className={styles.loader}>
            <Oval
              color="maroon"
              secondaryColor="white"
              height={50}
              width={50}
            />
          </div>
        ) : null}
        <div className={styles.search_results_wrapper}>
          {searchResults.map((item, i) => (
            <SearchItem
              key={i}
              title={item["Product Title"]}
              imageUrl={item["Image URL"]}
              imgWidth={150}
              imgHeight={170}
              alignItems="baseline"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
