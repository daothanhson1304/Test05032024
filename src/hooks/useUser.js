import { useEffect, useState } from "react";

export default function useUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const filteredUsers = users.filter(user => {
    return user.name.toLowerCase().includes(searchUser.toLowerCase());
  });

  return { users: filteredUsers, loading, error, searchUser, setSearchUser };
}
