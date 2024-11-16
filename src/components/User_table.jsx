import React, { useContext, useState } from "react";
import { Table } from "reactstrap";
import User_TableRow from "./User_TableRow";
import { UserContext } from "../context/UserContext";

const User_table = ({ setOpenUserId }) => {
  const { users, setUsers, deleteUser } = useContext(UserContext);

  const handleEditClick = (userId) => {
    setOpenUserId(userId);
  };
  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);

      alert("user deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to delete User");
    }
  };

  return (
    <div>
      <Table hover responsive striped>
        <thead>
          <tr className="fw-bolder">
            <th>S.NO</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <User_TableRow
                key={user.id}
                user={user}
                index={index + 1}
                onEditClick={() => handleEditClick(user.id)}
                onDeleteClick={() => handleDelete(user.id)}
              />
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default User_table;
