import { useEffect, useState } from "react";
function useApi() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return users.map((user) => <h1 key={user.id}>{user.name}</h1>);
}

export default useApi;
