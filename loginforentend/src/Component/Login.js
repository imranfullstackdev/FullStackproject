import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [data, SetData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  const navigate = useNavigate();
  const { name, email, password, number } = data;
  const changeHandler = (e) => [
    SetData({ ...data, [e.target.name]: e.target.value }),
  ];
  const viewUserpage = () => {
    navigate("/Viewuser");
  };
  // for posting the data
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const body = { data };
      const response = await fetch(`http://localhost:8000/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      alert(`${data.name} is added`);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };
  return (
    <>
      <Form onSubmit={submitHandler} className="w-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>NAME:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>NUMBER</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Your number"
            name="number"
            value={number}
            onChange={changeHandler}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Button variant="primary" className="ml-5 mt-5" onClick={viewUserpage}>
        ViewUser🕵️‍♀️
      </Button>
    </>
  );
};

export default Login;
