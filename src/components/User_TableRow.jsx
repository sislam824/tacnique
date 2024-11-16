import { Button } from "reactstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const User_TableRow = ({
  user,
  index,

  onEditClick,

  onDeleteClick,
}) => {
  return (
    <>
      <tr className="fw-bold align-middle">
        <td>{index}</td>
        <td>{user.name.split(" ")[0]}</td>
        <td>{user.name.split(" ")[1] || "N/A"}</td>
        <td>{user.email}</td>
        <td>{user.company.name || "N/A"}</td>
        <td>
          <Button color="light" className="me-2" onClick={onEditClick}>
            <FaEdit className="icon" />
          </Button>

          <Button color="danger" onClick={onDeleteClick}>
            <FaTrashAlt className="icon" />
          </Button>
        </td>
      </tr>
    </>
  );
};

export default User_TableRow;
