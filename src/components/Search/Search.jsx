import { useEffect, useState } from "react";
import { getArticles, getArticlesByTopic } from "../../utils/utils";
import { useSearchParams } from "react-router-dom";

export default function Search({ topic, setArticles }) {
  const [sortByInput, setSortByInput] = useState("created_at");
  const [orderInput, setOrderInput] = useState("DESC");
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSearchParams({ sort_by: sortByInput, order: orderInput });
  }, [sortByInput, orderInput]);

  function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    setSearchParams({ sort_by: sortByInput, order: orderInput });
    if (topic) {
      getArticlesByTopic(topic, sortByInput, orderInput).then((res) => {
        setArticles(res.articles);
        setIsLoading(false);
      });
    } else {
      getArticles(sortByInput, orderInput).then((res) => {
        setArticles(res.articles);
        setIsLoading(false);
      });
    }
  }

  return (
    <>
      <form id="search" onSubmit={handleSubmit}>
        <label htmlFor="sortby">
          Sort By:{" "}
          <select
            id="sortby"
            value={sortByInput}
            onChange={(event) => {
              setSortByInput(event.target.value);
            }}
          >
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
        </label>
        <label htmlFor="orderby">
          Order:{" "}
          <select
            id="orderby"
            value={orderInput}
            onChange={(event) => {
              setOrderInput(event.target.value);
            }}
          >
            <option value="DESC">Descending</option>
            <option value="ASC">Ascending</option>
          </select>
        </label>
        <button type="submit">Search</button>
      </form>
      {isLoading ? <h2>Loading...</h2> : null}
    </>
  );
}
