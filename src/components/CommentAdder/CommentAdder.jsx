import { useState } from "react";
import "./CommentAdder.css";
import { postComment } from "../../utils/utils";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContent";
import { Button, Form } from "react-bootstrap";

export default function CommentAdder({ id, setComments, setTotalComments }) {
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

      setTotalComments((prevTotalComments) => {
        return prevTotalComments + 1;
      });

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

  if (msg) {
    setTimeout(() => {
      setMsg("");
    }, 3000);
  }

  return (
    <Form onSubmit={handleSubmit} id="form">
      <Form.Label>Share your thoughts:</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        onChange={handleInput}
        value={newComment}
        id="comment"
      />
      <Button id="comment-btn" type="submit">
        Post comment
      </Button>
      <p id="msg">{msg}</p>
    </Form>
  );
}
