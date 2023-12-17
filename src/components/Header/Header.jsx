import { useContext } from "react";
import { UserContext } from "../../contexts/UserContent";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="header-container">
      <Link to="/" className="link">
        <h1 className="header-title">NC News</h1>
      </Link>
      <p id="user">
        Welcome, <strong>{user}</strong>! You are currently logged in.
      </p>
    </div>
  );
}
