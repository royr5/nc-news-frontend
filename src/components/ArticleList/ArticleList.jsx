import { useEffect, useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { getArticles } from "../../utils/utils";
import "./ArticleList.css";
import Search from "../Search/Search";

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

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Search topic={topic} setArticles={setArticles} />
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
