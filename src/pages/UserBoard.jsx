import React, { useContext, useEffect } from "react";
import Nav_Bar from "../components/Nav_Bar";
import { UserContext } from "../context/UserContext";
import User_table from "../components/User_table";

const UserBoard = () => {
  const { users, loading, error, getUsers, addUser, editUser, deleteUser } =
    useContext(UserContext);

  return (
    <div>
      <Nav_Bar />
      <div>
        <h1 className=" text-center">User List</h1>
      </div>
      <div className="w-75 m-auto">
        {users.length === 0 ? (
          <div className="text-center alert alert-warning">No user found .</div>
        ) : (
          <User_table />
        )}
      </div>
    </div>
  );
};

export default UserBoard;
