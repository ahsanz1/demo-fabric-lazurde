import algoliasearch from "algoliasearch";
import {
  ALGOLIA_API_KEY,
  ALGOLIA_APP_ID,
  SEARCH_INDEX,
} from "../../../general-config";

const ALGOLIA_CLIENT = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const INDEX = ALGOLIA_CLIENT.initIndex(SEARCH_INDEX);

export const fetchCategory = async (
  categoryName,
  page = 0,
  filterParents = false
) => {
  try {
    let response = await INDEX.search(categoryName, {
      restrictSearchableAttributes: ["Category"],
      hitsPerPage: 20,
      facetFilters: filterParents ? [["isVariant:false"]] : [],
      page,
    });
    console.log(
      "api key",
      ALGOLIA_API_KEY,
      "app id",
      ALGOLIA_APP_ID,
      "search index",
      SEARCH_INDEX
    );
    return response;
  } catch (err) {
    console.log("ALGOLIA SEARCH INDEX ERROR ->", err);
    return null;
  }
};

export const filteredSearch = async (query = "", filters) => {
  try {
    return new Promise((resolve, reject) => {
      INDEX.search(query, {
        facetFilters: filters,
      })
        .then(({ hits }) => {
          return resolve(hits);
        })
        .catch((err) => {
          reject(err);
        });
    });
  } catch (err) {
    console.log(`Error fetching items for query: ${query}`, err);
    return null;
  }
};

export const fetchItems = async (
  query,
  pageSize = 500,
  page = 0,
  filterParents = false
) => {
  try {
    let response = await INDEX.search(query, {
      // restrictSearchableAttributes: ['title', 'description'],
      hitsPerPage: pageSize,
      facetFilters: filterParents ? [["isVariant:false"]] : [],
      page,
    });
    return response;
  } catch (err) {
    console.log(`Error fetching items for query: ${query}`, err);
    return null;
  }
};
