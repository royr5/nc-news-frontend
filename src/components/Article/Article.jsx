import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../../utils/utils";
import "./Article.css";
import ArticleVote from "../ArticleVote/ArticleVote";
import CommentList from "../CommentList/CommentList";
import Error from "../Error/Error";

export default function Article() {
  const { article } = useParams();
  const [articleContent, setArticleContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSingleArticle(article)
      .then((res) => {
        setArticleContent(res.articles);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Article not found");
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
      <ul>
        {articleContent.map((article) => {
          return (
            <li key={article.article_id} id="article-content">
              <h2>{article.title}</h2>
              <img src={article.article_img_url} alt="" id="article-img" />

              <p>Topic: {article.topic}</p>
              <p>By {article.author}</p>
              <p>{article.body}</p>
              <p>Votes: {article.votes}</p>
              <p>Total comments: {article.comment_count}</p>
            </li>
          );
        })}
      </ul>
      <ArticleVote setArticleContent={setArticleContent} article={article} />
      <CommentList id={article} />
    </>
  );
}
