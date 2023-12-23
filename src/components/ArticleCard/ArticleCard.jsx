import React from "react";
import "./ArticleCard.css";
import { Link } from "react-router-dom";
import ArticleVote from "../ArticleVote/ArticleVote";
import Card from "react-bootstrap/Card";
import { Badge } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

export default function ArticleCard({ article, setArticleContent }) {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const formattedDate = new Date(article.created_at).toLocaleString(
    undefined,
    options
  );

  return (
    <Card style={{ width: "18rem", height: "28rem" }}>
      <Link to={`/articles/${article.article_id}`} className="article-link">
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Body>
          <Card.Title className="article-title">{article.title}</Card.Title>

          <Stack direction="horizontal">
            <Badge>{article.topic}</Badge>

            <div className="p-2 ms-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat-left"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              </svg>{" "}
              {article.comment_count}
            </div>

            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                />
              </svg>{" "}
              {article.votes}
            </div>
          </Stack>

          <Stack direction="horizontal" gap={5}>
            By {article.author}
            <div className="p-2 ms-auto">
              <time dateTime={article.created_at}>{formattedDate}</time>
            </div>
          </Stack>
        </Card.Body>
      </Link>

      <div>
        <ArticleVote
          setArticleContent={setArticleContent}
          article={article.article_id}
        />
      </div>
    </Card>
  );
}
