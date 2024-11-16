import React, { useContext, useState } from "react";
import { Table } from "reactstrap";
import User_TableRow from "./User_TableRow";
import { UserContext } from "../context/UserContext";
import { deleteUser } from "../api/userApi";

const User_table = () => {
  const { users, setUsers } = useContext(UserContext);
  const [openUserId, setOpenUserId] = useState(null);

  const handleEditClick = (userId) => {
    setOpenUserId(openUserId === userId ? null : userId);
  };
  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error(error);
      alert("Failed to delete User");
    }
  };

  const handleUserUpdated = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  return (
    <div>
      <Table dark hover responsive striped>
        <thead>
          <tr className="fw-bolder">
            <th>S.NO</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
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
                isSidebarOpen={openUserId === user.id}
                onEditClick={() => handleEditClick(user.id)}
                onUserUpdated={handleUserUpdated}
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
