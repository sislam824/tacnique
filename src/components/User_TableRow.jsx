import { Button } from "reactstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditUserSidebar from "./Sidebar";

const User_TableRow = ({
  user,
  index,
  isSidebarOpen,
  onEditClick,
  onUserUpdated,
  onDeleteClick,
}) => {
  return (
    <>
      <tr className="fw-bold align-middle">
        <td>{index}</td>
        <td>{user.name.split(" ")[0]}</td>
        <td>{user.name.split(" ")[1] || "N/A"}</td>
        <td>{user.email}</td>
        <td>{user.department || "N/A"}</td>
        <td>
          <Button color="light" className="me-2" onClick={onEditClick}>
            <FaEdit className="icon" />
          </Button>
          <Button color="danger" onClick={onDeleteClick}>
            <FaTrashAlt className="icon" />
          </Button>
        </td>
      </tr>

      {isSidebarOpen && (
        <EditUserSidebar
          isOpen={isSidebarOpen}
          user={user}
          onClose={() => onEditClick(null)}
          onUserUpdated={onUserUpdated}
        />
      )}
    </>
  );
};

export default User_TableRow;
