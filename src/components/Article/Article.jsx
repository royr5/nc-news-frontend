import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../../utils/utils";
import "./Article.css";

export default function Article() {
  const { article } = useParams();
  const [articleContent, setArticleContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleArticle(article).then((res) => {
      setArticleContent(res.articles);
      setIsLoading(false);
    });
  }, [article]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {articleContent.map((article) => {
        return (
          <li key={article.article_id}>
            <h2>{article.title}</h2>
            <img src={article.article_img_url} alt="" />
            <p>Topic: {article.topic}</p>
            <p>By {article.author}</p>
            <p>{article.body}</p>
            <p>Votes: {article.votes}</p>
            <p>Total comments: {article.comment_count}</p>
          </li>
        );
      })}
    </ul>
  );
}
