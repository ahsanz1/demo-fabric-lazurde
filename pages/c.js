import React from "react";
import Header from "../components/header";
import SearchResults from "../components/search-results";
import { fetchCategory } from "../lib/api/algolia";

function ProductListing({ categoryName, hits }) {
  return (
    <div>
      <Header />
      <SearchResults hits={hits} query={categoryName} />
    </div>
  );
}

export default ProductListing;

export async function getServerSideProps(context) {
  const categoryName = context.query.category;
  let hits = [];
  try {
    const algoliaRes = await fetchCategory(categoryName);
    hits = algoliaRes.hits;
  } catch (error) {
    console.log("Error fetching category products: ", error.message);
  }
  return {
    props: {
      categoryName,
      hits,
    },
  };
}
