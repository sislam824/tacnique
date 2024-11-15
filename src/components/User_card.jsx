import React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

export const User_card = ({ name, age, email }) => {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src="https://picsum.photos/300/200" />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>

        <CardText>{email}</CardText>
        <CardText>{age}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};
