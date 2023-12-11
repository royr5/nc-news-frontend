import { useEffect } from "react";
import { useState } from "react";
import { getArticles } from "../../utils/utils";
import ArticleCard from "../ArticleCard/ArticleCard";

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
