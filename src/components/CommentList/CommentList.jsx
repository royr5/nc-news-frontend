import { useEffect } from "react";
import { useState } from "react";
import { getComments } from "../../utils/utils";
import CommentCard from "../CommentCard/CommentCard";
import "./CommentList.css";
import CommentAdder from "../CommentAdder/CommentAdder";
import Spinner from "react-bootstrap/Spinner";

export default function CommentList({ id, commentCount }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [totalComments, setTotalComments] = useState(commentCount);

  useEffect(() => {
    getComments(id).then((res) => {
      setComments(res.comments);
      setIsLoading(false);
    });
  }, []);

  if (deleteMessage) {
    setTimeout(() => {
      setDeleteMessage("");
    }, 3000);
  }

  return (
    <>
      <CommentAdder
        id={id}
        setComments={setComments}
        setTotalComments={setTotalComments}
      />

      <h4 id="comment-heading">{totalComments} Comments</h4>

      {deleteMessage && (
        <p className={deleteMessage.type}>{deleteMessage.text}</p>
      )}

      {isLoading ? (
        <Spinner animation="border" variant="primary" className="spinner" />
      ) : (
        <div id="comments-list">
          {comments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              setComments={setComments}
              setDeleteMessage={setDeleteMessage}
              comment={comment}
              setTotalComments={setTotalComments}
            />
          ))}
        </div>
      )}
    </>
  );
}
