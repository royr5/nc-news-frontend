import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, patchArticle } from "../../utils/utils";
import "./Article.css";

export default function Article() {
  const { article } = useParams();
  const [articleContent, setArticleContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [vote, setVote] = useState("");

  useEffect(() => {
    getSingleArticle(article).then((res) => {
      setArticleContent(res.articles);
      setIsLoading(false);
    });
  }, [article]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  function handleUpVote() {
    patchArticle(article, 1)
      .then(() => {
        setArticleContent((prevContent) => {
          return prevContent.map((article) => {
            return { ...article, votes: article.votes + 1 };
          });
        });
      })
      .catch(() => {
        setVote("err");
      });
    setVote("Upvoted");
  }

  function handleDownVote() {
    patchArticle(article, -1)
      .then(() => {
        setArticleContent((prevContent) => {
          return prevContent.map((article) => {
            return { ...article, votes: article.votes - 1 };
          });
        });
      })
      .catch(() => {
        setVote("err");
      });
    setVote("Downvoted");
  }

  return (
    <>
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
      {vote ? (
        vote === "err" ? (
          <p id="msg">Error voting on this article</p>
        ) : (
          <p id="msg">You {vote} this article</p>
        )
      ) : (
        <>
          <button onClick={handleUpVote}>UpVote +1</button>
          <button onClick={handleDownVote}>DownVote -1</button>
        </>
      )}
    </>
  );
}
