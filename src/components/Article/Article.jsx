import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../../utils/utils";
import "./Article.css";
import ArticleVote from "../ArticleVote/ArticleVote";
import CommentList from "../CommentList/CommentList";
import Error from "../Error/Error";
import Spinner from "react-bootstrap/Spinner";
import { Card, Stack } from "react-bootstrap";

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
  }, [article]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div id="article-body">
      {isLoading ? (
        <Spinner animation="border" variant="primary" className="spinner" />
      ) : (
        <div className="article-container">
          {articleContent.map((article, index) => (
            <div key={index} className="article-card-container">
              <Card>
                <Card.Img
                  className="article-img"
                  variant="top"
                  src={article.article_img_url}
                />
                <Card.Body>
                  <Stack direction="horizontal" gap={3}>
                    <div className="p-2">
                      <Card.Title>{article.title}</Card.Title>
                    </div>
                    <div className="p-2 ms-auto">By {article.author}</div>
                    <div className="p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                        />
                      </svg>{" "}
                      {article.votes}
                    </div>
                  </Stack>

                  <Card.Text className="article-body">{article.body}</Card.Text>
                </Card.Body>
                <ArticleVote
                  setArticleContent={setArticleContent}
                  article={article.article_id}
                />
              </Card>
            </div>
          ))}
          <CommentList
            id={article}
            commentCount={articleContent[0].comment_count}
          />
        </div>
      )}
    </div>
  );
}
