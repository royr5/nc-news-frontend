import { useEffect, useState } from "react";
import { getUsers } from "../../utils/utils";
import { UserContext } from "../../contexts/UserContent";
import { useContext } from "react";
import "./Users.css";
import Spinner from "react-bootstrap/Spinner";
import { Card, CardGroup } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const { setUser } = useContext(UserContext);
  const { user } = useContext(UserContext);

  function handleAvatarClick(username) {
    setUser(username);
  }

  useEffect(() => {
    setIsLoading(true);
    setErr(false);
    getUsers()
      .then(({ users }) => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErr(err);
      });
  }, []);

  if (err)
    return (
      <div>
        <h1>Whoops</h1>
        <h2>Status: {err.status}</h2>
        <h2>{err.msg}</h2>
      </div>
    );

  return (
    <div className="user-container">
      <h2>Users</h2>
      <p id="user-desc">Click on a users image to log in</p>
      <p id="current-user">
        Hello <Badge bg="dark">{user}</Badge> !
      </p>

      {isLoading ? (
        <Spinner animation="border" variant="primary" className="spinner" />
      ) : null}

      <CardGroup id="users-list">
        <ul>
          {users.map((user) => {
            return (
              <Card
                className="user-card"
                onClick={() => {
                  handleAvatarClick(user.username);
                }}
              >
                <Stack className="user-info" direction="horizontal" gap={3}>
                  <div className="p-2">{user.name}</div>
                  <div className="p-2 ms-auto">
                    {" "}
                    <Badge>{user.username}</Badge>
                  </div>
                </Stack>

                <Card.Img src={user.avatar_url} />
              </Card>
            );
          })}
        </ul>
      </CardGroup>
    </div>
  );
}
