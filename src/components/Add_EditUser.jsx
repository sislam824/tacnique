import React, { useContext, useEffect, useState } from "react";

import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";
import { UserContext } from "../context/UserContext";

const initialFormData = {
  firstname: "",
  lastname: "",
  email: "",
  company: {
    name: "",
  },
};
const Add_EditUser = ({ openUserId, setOpenUserId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setData] = useState(initialFormData);
  const { addUser, users, editUser } = useContext(UserContext);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      //   console.log("closed");
      setOpenUserId(null);
      setData(initialFormData);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "company") {
      setData({ ...formData, [name]: { name: value } });
    } else {
      // setData((prevData)=>({...prevData,}))
      setData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("formData", formData);
    let name = formData.firstname + " " + formData.lastname;

    let data = { ...formData, name: name };
    delete data.firstname;
    delete data.lastname;
    // console.log(data);
    if (openUserId) {
      editUser(data.id, data);
    } else {
      addUser(data);
    }

    setData(initialFormData);
    toggle();
  };
  useEffect(() => {
    if (openUserId) {
      let filterUser = { ...users.find((ele, i) => ele.id === openUserId) };

      if (filterUser) {
        let [firstname, lastname] = filterUser.name.split(" ");
        filterUser.firstname = firstname;
        filterUser.lastname = lastname;
        delete filterUser.name;
        // console.log(filterUser);
        setData(filterUser);
        toggle();
      }
    }
  }, [openUserId]);
  return (
    <>
      <Button color="success" outline onClick={toggle}>
        ADD USER
      </Button>
      <Offcanvas isOpen={isOpen} direction="end" toggle={toggle}>
        <OffcanvasHeader toggle={toggle}>
          {!openUserId ? "ADD USER" : "EDIT USER"}
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">First Name</Label>
                <Input
                  id="firstname"
                  name="firstname"
                  onChange={handleChange}
                  value={formData.firstname}
                  placeholder="enter firstname"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Last Name</Label>
                <Input
                  id="lastname"
                  name="lastname"
                  onChange={handleChange}
                  value={formData.lastname}
                  placeholder="enter lastname"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  onChange={handleChange}
                  value={formData.company.name}
                  placeholder="company Name"
                  type="text"
                />
              </FormGroup>

              <Button type="submit">Save</Button>
            </Form>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default Add_EditUser;
