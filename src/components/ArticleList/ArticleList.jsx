import { useEffect, useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { getArticles } from "../../utils/utils";
import "./ArticleList.css";

export default function ArticleList({ topicsArticles }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  useEffect(() => {
    if (topicsArticles) {
      setArticles(topicsArticles);
      setIsLoading(false);
    } else {
      getArticles().then((res) => {
        setArticles(res.articles);
        setIsLoading(false);
      });
    }
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  function handleSubmit(event) {
    setIsLoadingt(true);
    event.preventDefault();
    getArticles(sortBy, order).then((res) => {
      setArticles(res.articles);
      setIsLoading(false);
    });
  }

  return (
    <>
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
      <ul>
        {articles.map((article) => (
          <ArticleCard
            article={article}
            key={article.article_id}
            setArticleContent={setArticles}
          />
        ))}
      </ul>
    </>
  );
}
