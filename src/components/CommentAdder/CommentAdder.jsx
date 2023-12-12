import { useState } from "react";
import "./CommentAdder.css";
import { postComment } from "../../utils/utils";

export default function CommentAdder({ id }) {
  const [newComment, setNewComment] = useState("");

  function handleInput(event) {
    setNewComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    postComment(id, newComment, "tickle122");
    setNewComment("");
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
      </form>
    </>
  );
}
