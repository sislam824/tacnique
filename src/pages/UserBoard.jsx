import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import User_table from "../components/User_table";
import Add_EditUser from "../components/Add_EditUser";

const UserBoard = () => {
  const { users } = useContext(UserContext);
  const [openUserId, setOpenUserId] = useState(null);

  useEffect(() => {
    console.log(openUserId);
  }, [openUserId]);
  return (
    <div>
      <div className="d-flex justify-content-center gap-5 align-items-center">
        <h1 className=" text-center">User List</h1>
        <Add_EditUser
          formType="add"
          openUserId={openUserId}
          setOpenUserId={setOpenUserId}
        />
      </div>
      <div className="w-75 m-auto">
        {users.length === 0 ? (
          <div className="text-center alert alert-warning">No user found .</div>
        ) : (
          <User_table openUserId={openUserId} setOpenUserId={setOpenUserId} />
        )}
      </div>
    </div>
  );
};

export default UserBoard;
