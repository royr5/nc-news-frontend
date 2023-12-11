import React from "react";
import "./ArticleCard.css";

export default function ArticleCard({ article }) {
  const formattedDate = new Date(article.created_at).toLocaleString();

  return (
    <li>
      <h2>{article.title}</h2>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>
        Time: <time dateTime={article.created_at}>{formattedDate}</time>
      </p>
      <p>Votes: {article.votes}</p>
      <img src={article.article_img_url} alt="" />
      <p>Comments: {article.comment_count}</p>
    </li>
  );
}
