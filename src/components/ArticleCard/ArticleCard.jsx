import React from "react";
import "./ArticleCard.css";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const formattedDate = new Date(article.created_at).toLocaleString();

  return (
    <li className="article">
      <Link to={`/articles/${article.article_id}`} className="article-link">
        <div>
          <h2>{article.title}</h2>
          <img src={article.article_img_url} alt="" id="article-img"/>
          <p>Topic: {article.topic}</p>
          <p>By {article.author}</p>
          <p>
            Time: <time dateTime={article.created_at}>{formattedDate}</time>
          </p>
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
        </div>
      </Link>
    </li>
  );
}
