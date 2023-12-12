import { patchArticle } from "../../utils/utils";
import { useState } from "react";

export default function ArticleVote({ setArticleContent, article }) {
  const [vote, setVote] = useState("");

  function handleUpVote() {
    setArticleContent((prevContent) => {
      return prevContent.map((article) => {
        return { ...article, votes: article.votes + 1 };
      });
    });

    patchArticle(article, 1)
      .then(() => {
        setVote("Upvoted");
      })
      .catch(() => {
        setVote("err");
      });
  }

  function handleDownVote() {
    setArticleContent((prevContent) => {
      return prevContent.map((article) => {
        return { ...article, votes: article.votes - 1 };
      });
    });

    patchArticle(article, -1)
      .then(() => {
        setVote("Downvoted");
      })
      .catch(() => {
        setVote("err");
      });
  }

  return (
    <>
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
