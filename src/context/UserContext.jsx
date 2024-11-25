import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

const USER_URL = "https://jsonplaceholder.typicode.com/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(USER_URL);
      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users");
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addUser = async (user) => {
    try {
      const response = await axios.post(USER_URL, user);
      setUsers((prevUsers) => [...prevUsers, response.data]);
      alert("user added successfully");
    } catch (err) {
      setError("Failed to add user");
    }
  };

  const editUser = async (id, updatedUser) => {
    try {
      const response = await axios.put(`${USER_URL}/${id}`, updatedUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? response.data : user))
      );
    } catch (err) {
      setError("Failed to edit user");
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${USER_URL}/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (err) {
      setError("Failed to delete user");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        getUsers,
        addUser,
        editUser,
        deleteUser,
        setUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
