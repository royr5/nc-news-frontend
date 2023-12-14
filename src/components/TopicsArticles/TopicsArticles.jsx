import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../../utils/utils";
import ArticleList from "../ArticleList/ArticleList";
import Error from "../Error/Error";

export default function TopicsArticles() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticlesByTopic(topic)
      .then((res) => {
        setArticles(res.articles);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Topic not found");
      });
  }, []);

  if (error) {
    return <Error message={error} />;
  }

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
