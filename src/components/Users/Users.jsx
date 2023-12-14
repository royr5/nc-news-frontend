import { useEffect, useState } from "react";
import { getUsers } from "../../utils/utils";
import { UserContext } from "../../contexts/UserContent";
import { useContext } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const { setUser } = useContext(UserContext);

  function handleAvatarClick(username) {
    setUser(username);
  }

  useEffect(() => {
    setIsLoading(true);
    setErr(false);
    getUsers()
      .then(({ users }) => {
        console.log(users);
        setUsers(users);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErr(err);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (err)
    return (
      <div>
        <h1>Whoops</h1>
        <h2>Status: {err.status}</h2>
        <h2>{err.msg}</h2>
      </div>
    );

  return (
    <div>
      <h1>Users</h1>
      <p>Click on a users image to log in</p>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.username}>
              <p>username: {user.username}</p>
              <p>Name: {user.name}</p>
              <img
                src={user.avatar_url}
                alt=""
                width="100"
                onClick={() => {
                  handleAvatarClick(user.username);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
