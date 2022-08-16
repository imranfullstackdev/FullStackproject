import React, { useState, useEffect } from "react";
import Editmodal from "./Editmodal";
import { Table, Button } from "react-bootstrap";

const Viewuser = () => {
  const [userData, setUserData] = useState([]);

  // for getting all trhe data from the user
  async function alluser() {
    const alluserdata = await fetch(`http://localhost:8000/`);
    const responseData = await alluserdata.json();
    setUserData(responseData);
  }

  //   for editing the user

  // for deleting the user
  const DeleteUser = async (id) => {
    const datadlt = await fetch(`http://localhost:8000/removeuser/${id}`, {
      method: "delete",
    });
    alert("Deleted Sucessfully");
    window.location.reload();
  };
  useEffect(() => {
    alluser();
  }, []);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>NAME</th>
            <th>Email</th>
            <th>Password</th>
            <th>NUMBER</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((userinfo) => (
            <tr key={userinfo.id}>
              <td>{userinfo.id}</td>
              <td>{userinfo.username}</td>
              <td>{userinfo.useremail}</td>
              <td>{userinfo.userpassword}</td>
              <td>{userinfo.usernumber}</td>
              <td>
                <Editmodal userinfo={userinfo} />
              </td>
              <td>
                <Button onClick={() => DeleteUser(userinfo.id)}>DELETE</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Viewuser;
