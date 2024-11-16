import { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { editUser } from "../api/userApi";

const EditUserSidebar = ({ isOpen, user, onClose, onUserUpdated }) => {
  const [editedUser, setEditedUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    if (user) {
      const [firstName, lastName] = user.name.split(" ");
      setEditedUser({
        firstName: firstName || "",
        lastName: lastName || "",
        email: user.email || "",
        department: user.department || "N/A",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = {
        id: user.id,
        name: `${editedUser.firstName} ${editedUser.lastName}`,
        email: editedUser.email,
        department: editedUser.department,
      };
      await editUser(user.id, updatedUser);
      onUserUpdated(updatedUser);
      onClose();
    } catch (error) {
      console.error("Failed to edit user", error);
    }
  };

  return (
    <div
      className={`edit-sidebar ${isOpen ? "open" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: isOpen ? "0" : "-300px",
        width: "300px",
        height: "100vh",
        backgroundColor: "white",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
        transition: "left 0.3s ease",
        padding: "20px",
        zIndex: 9999,
      }}
    >
      <h3>Edit User</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            value={editedUser.firstName}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            value={editedUser.lastName}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="department">Department</Label>
          <Input
            type="text"
            name="department"
            id="department"
            value={editedUser.department}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Save
        </Button>
        <Button type="button" color="secondary" onClick={onClose}>
          Close
        </Button>
      </Form>
    </div>
  );
};

export default EditUserSidebar;
