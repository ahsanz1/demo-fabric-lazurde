import React from "react";
import Header from "../components/header";
import SearchResults from "../components/search-results";
import { fetchCategory } from "../lib/api/algolia";

function Search({ query, hits, error }) {
  return (
    <div>
      <Header />
      <SearchResults query={query} hits={hits} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const errorMsg = "";
  const searchQuery = context.query.query;
  let hits = [];
  try {
    const algoliaRes = await fetchCategory(searchQuery);
    hits = algoliaRes.hits;
  } catch (error) {
    console.log("Error fetching products: ", error.message);
  }

  return {
    props: {
      query: searchQuery,
      hits: hits,
      error: errorMsg,
    }, // will be passed to the page component as props
  };
}
