import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../../utils/utils";
export default function Article() {
  const { article } = useParams();
  const [articleContent, setArticleContent] = useState([]);

  useEffect(() => {
    getSingleArticle(article).then((res) => {
      setArticleContent(res.articles);
    });
  }, [article]);

  return (
    <ul>
      {articleContent.map((article) => {
        return (
          <li key={article.article_id}>
            <h2>{article.title}</h2>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <p>{article.body}</p>

            <p>Votes: {article.votes}</p>
            <img src={article.article_img_url} alt="" />
            <p>Comments: {article.comment_count}</p>
          </li>
        );
      })}
    </ul>
  );
}
