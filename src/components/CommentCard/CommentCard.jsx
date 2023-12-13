import { deleteComment } from "../../utils/utils";
import "./CommentCard.css";

export default function CommentCard({
  comment,
  setComments,
  setDeleteMessage,
}) {
  const formattedDate = new Date(comment.created_at).toLocaleString();

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
        {"grumpy19" === comment.author ? (
          <button onClick={handleDelete}>DELETE COMMENT</button>
        ) : null}
      </li>
    </>
  );
}
