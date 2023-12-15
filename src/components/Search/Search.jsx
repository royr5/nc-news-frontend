import { useState } from "react";
import { getArticles, getArticlesByTopic } from "../../utils/utils";
import { useSearchParams } from "react-router-dom";

export default function Search({ topic, setArticles }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  let sort_by = searchParams.get("sort_by") || "created_at";
  let order = searchParams.get("order") || "DESC";

  function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    if (topic) {
      getArticlesByTopic(topic, sort_by, order).then((res) => {
        setArticles(res.articles);
        setIsLoading(false);
      });
    } else {
      getArticles(sort_by, order).then((res) => {
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
            value={sort_by}
            onChange={(event) => {
              setSearchParams({ sort_by: event.target.value, order });
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
            value={order}
            onChange={(event) => {
              setSearchParams({ sort_by, order: event.target.value });
            }}
          >
            <option value="DESC">Descending</option>
            <option value="ASC">Ascending</option>
          </select>
        </label>
        <button type="submit">Sort Articles</button>
      </form>
      {isLoading ? <h2>Loading...</h2> : null}
    </>
  );
}
