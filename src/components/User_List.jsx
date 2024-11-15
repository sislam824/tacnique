import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { User_card } from "./User_card";

const User_List = () => {
  const { users, loading, error, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
    console.log("123");
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {users.map((user) => (
        <User_card key={user.id} name={user.name} email={user.email} age={15} />
      ))}
    </div>
  );
};

export default User_List;
