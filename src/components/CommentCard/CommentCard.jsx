import { deleteComment } from "../../utils/utils";
import "./CommentCard.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContent";

export default function CommentCard({
  comment,
  setComments,
  setDeleteMessage,
}) {
  const formattedDate = new Date(comment.created_at).toLocaleString();
  const { user } = useContext(UserContext);

  function handleDelete() {
    setComments((prevComments) => {
      return prevComments.filter(
        (prevComment) => prevComment.comment_id !== comment.comment_id
      );
    });

    deleteComment(comment.comment_id)
      .then(() => {
        setDeleteMessage({
          type: "success",
          text: "Comment deleted successfully",
        });
      })
      .catch(() => {
        setDeleteMessage({ type: "error", text: "Error deleting the comment" });
      });
  }

  return (
    <>
      <li className="comments">
        <p>Votes: {comment.votes}</p>
        <p>Author: {comment.author}</p>
        <p>
          Time: <time dateTime={comment.created_at}>{formattedDate}</time>
        </p>
        <p>Body: {comment.body}</p>
        {user === comment.author ? (
          <button onClick={handleDelete}>DELETE COMMENT</button>
        ) : null}
      </li>
    </>
  );
}
