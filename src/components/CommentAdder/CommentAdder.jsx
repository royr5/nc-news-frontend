import { useState } from "react";
import "./CommentAdder.css";
import { postComment } from "../../utils/utils";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContent";

export default function CommentAdder({ id, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [msg, setMsg] = useState("");
  const { user } = useContext(UserContext);

  function handleInput(event) {
    setNewComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newComment) {
      setComments((prevComments) => [
        {
          article_id: id,
          author: user,
          body: newComment,
          comment_id: Date.now(),
          created_at: new Date().toISOString(),
          votes: 0,
        },
        ...prevComments,
      ]);

      postComment(id, newComment, user)
        .then(() => {
          setNewComment("");
          setMsg("Your comment has been posted");
        })
        .catch(() => {
          setComments((prevComments) => prevComments.slice(1));
          setMsg("Error posting your comment");
        });
    } else {
      alert("You need to enter text to post a comment");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="form">
        <label htmlFor="comment">
          Add a Comment:
          <textarea
            onChange={handleInput}
            value={newComment}
            id="comment"
            rows="4"
            cols="50"
          ></textarea>
        </label>
        <button type="submit">Post comment</button>
        <p id="msg">{msg}</p>
      </form>
    </>
  );
}
