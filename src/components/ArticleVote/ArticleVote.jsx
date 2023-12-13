import { patchArticle } from "../../utils/utils";
import { useState } from "react";

export default function ArticleVote({ setArticleContent, article }) {
  const [vote, setVote] = useState(0);

  function handleVote() {
    const newVote = vote === 0 ? 1 : 0;
    const voteDiff = newVote - vote;

    setArticleContent((prevContent) => {
      return prevContent.map((prevArticle) => {
        if (prevArticle.article_id === article) {
          return { ...prevArticle, votes: prevArticle.votes + voteDiff };
        }
        return prevArticle;
      });
    });

    patchArticle(article, voteDiff).then(() => {
      setVote(newVote);
    });
  }

  return (
    <button onClick={handleVote}>
      {vote === 0 ? "UpVote +1" : "Remove Vote"}
    </button>
  );
}
