import { patchArticle } from "../../utils/utils";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./ArticleVote.css";

export default function ArticleVote({ setArticleContent, article }) {
  const [vote, setVote] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function handleVote() {
    setIsLoading(true);

    const newVote = vote === 0 ? 1 : 0;
    const voteDiff = newVote - vote;

    setArticleContent((prevContent) => {
      return prevContent.map((prevArticle) => {
        return { ...prevArticle, votes: prevArticle.votes + voteDiff };
      });
    });

    patchArticle(article, voteDiff).then(() => {
      setVote(newVote);
      setIsLoading(false);
    });
  }

  return (
    <Button
      size="sm"
      onClick={handleVote}
      variant="outline-primary"
      disabled={isLoading}
      className="vote-btn "
    >
      {isLoading ? "Loading…" : vote === 0 ? "+1 UpVote!" : "Remove Vote"}
    </Button>
  );
}
