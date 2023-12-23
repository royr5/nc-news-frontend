import { useEffect, useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { getArticles } from "../../utils/utils";
import Search from "../Search/Search";
import Spinner from "react-bootstrap/Spinner";
import "./ArticleList.css";
import { CardGroup } from "react-bootstrap";

export default function ArticleList({ topic, topicsArticles }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      <Search topic={topic} setArticles={setArticles} />

      <CardGroup id="article-list">
        {articles.map((article) => (
          <ul>
            <ArticleCard
              article={article}
              key={article.article_id}
              setArticleContent={setArticles}
            />
          </ul>
        ))}
      </CardGroup>

      {isLoading ? (
        <Spinner animation="border" variant="primary" className="spinner" />
      ) : null}
    </>
  );
}
