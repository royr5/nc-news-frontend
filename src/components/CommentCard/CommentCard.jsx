import { deleteComment } from "../../utils/utils";
import "./CommentCard.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContent";
import { Button, Card, Stack, Badge } from "react-bootstrap";

export default function CommentCard({
  comment,
  setComments,
  setDeleteMessage,
}) {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const formattedDate = new Date(comment.created_at).toLocaleString(
    undefined,
    options
  );

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
    <Card className="comments-card">
      <Stack direction="horizontal" gap={3}>
        <div className="p-2">
          <Badge>{comment.author}</Badge>
        </div>
        <div className="p-2 ms-auto">
          {" "}
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
          {comment.votes}
        </div>
        <div className="p-2">
          <time dateTime={comment.created_at}>{formattedDate}</time>
        </div>
        <div className="p-2">
          {user === comment.author ? (
            <Button onClick={handleDelete} variant="danger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
              </svg>
            </Button>
          ) : null}
        </div>
      </Stack>

      <Card.Text>{comment.body}</Card.Text>
    </Card>
  );
}
