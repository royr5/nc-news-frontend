import { Link } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  return (
    <nav>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/topics" className="link">
        Topics
      </Link>
      <Link to="/users" className="link">
        Users
      </Link>
    </nav>
  );
}
