import "./CommentCard.css";

export default function CommentCard({ comment }) {
  const formattedDate = new Date(comment.created_at).toLocaleString();

  return (
    <li className="comments">
      <p>Votes: {comment.votes}</p>
      <p>Author: {comment.author}</p>
      <p>
        Time: <time dateTime={comment.created_at}>{formattedDate}</time>
      </p>
      <p>Body: {comment.body}</p>
    </li>
  );
}
