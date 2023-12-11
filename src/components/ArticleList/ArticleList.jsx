import { useEffect } from "react";
import { useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { getArticles } from "../../utils/api";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res.articles);
    });
  }, [articles]);

  return (
    <>
      <ul>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
}
