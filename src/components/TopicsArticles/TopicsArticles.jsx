import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../../utils/utils";
import ArticleList from "../ArticleList/ArticleList";

export default function TopicsArticles() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticlesByTopic(topic).then((res) => {
      setArticles(res.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Articles on {topic}</h2>
      <ArticleList topic={topic} topicsArticles={articles} />
    </>
  );
}
