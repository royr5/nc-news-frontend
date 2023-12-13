import "./Header.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContent";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>NC News</h1>
      <p id="user">{user} is logged in</p>
    </>
  );
}
