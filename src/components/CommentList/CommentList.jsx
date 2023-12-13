import { useEffect } from "react";
import { useState } from "react";
import { getComments } from "../../utils/utils";
import CommentCard from "../CommentCard/CommentCard";
import "./CommentList.css";

export default function CommentList({ id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCommentsHidden, setIsCommentsHidden] = useState(true);
  const [deleteMessage, setDeleteMessage] = useState("");

  function toggleComments() {
    setIsCommentsHidden(!isCommentsHidden);
  }

  useEffect(() => {
    getComments(id).then((res) => {
      setComments(res.comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2 id="loading">Loading...</h2>;
  }

  if (deleteMessage) {
    setTimeout(() => {
      setDeleteMessage("");
    }, 3000);
  }

  return (
    <>
      <button id="toggle" onClick={toggleComments}>
        {isCommentsHidden ? "Show " : "Hide "}
        comments
      </button>

      {isCommentsHidden ? null : (
        <>
          <h3 id="comment-heading">Comments:</h3>
          {deleteMessage && (
            <p className={deleteMessage.type}>{deleteMessage.text}</p>
          )}
          <ul>
            {comments.map((comment) => {
              return (
                <CommentCard
                  setComments={setComments}
                  setDeleteMessage={setDeleteMessage}
                  comment={comment}
                  key={comment.comment_id}
                />
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
