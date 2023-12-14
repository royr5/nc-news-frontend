import { useState } from "react";
import { getArticles, getArticlesByTopic } from "../../utils/utils";

export default function Search({ topic, setArticles }) {
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  function handleSubmit(event) {
    event.preventDefault();
    if (topic) {
      getArticlesByTopic(topic, sortBy, order).then((res) => {
        setArticles(res.articles);
      });
    } else {
      getArticles(sortBy, order).then((res) => {
        setArticles(res.articles);
      });
    }
  }
  return (
    <form id="search" onSubmit={handleSubmit}>
      <label htmlFor="sortby">
        Sort By:{" "}
        <select
          id="sortby"
          onChange={(event) => {
            setSortBy(event.target.value);
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
          onChange={(event) => {
            setOrder(event.target.value);
          }}
        >
          <option value="DESC">Descending</option>
          <option value="ASC">Ascending</option>
        </select>
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
