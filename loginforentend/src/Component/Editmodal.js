import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Editmodal = (userinfo) => {
  //   console.log(userinfo.userinfo.id);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(userinfo.userinfo);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // console.log(data);
  // console.log(userinfo.userinfo)

  const EditUser = async (id) => {
 

    try {
      const body = { data };
      const edituser = await fetch(`http://localhost:8000/edituser/${id}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(body.data),
      });
      console.log(body.data)
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
    // console.log(id);
    // const body = { data };
    // console.log(body.data);
  };
  return (
    <>
      {/* edit Button */}
      <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>
      <form
      //   onSubmit={submitHandler}
      >
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>EDIT DETAILS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="justify-content:center">
              <label>NAME:</label>
              <input
                type="text"
                name={"username"}
                defaultValue={userinfo.userinfo.username}
                onChange={changeHandler}
              />
              <br />
              <label>Email:</label>
              <input
                type="email"
                name={"useremail"}
                defaultValue={userinfo.userinfo.useremail}
                onChange={changeHandler}
              />
              <br />
              <label>password:</label>
              <input
                type="password"
                name={"userpassword"}
                defaultValue={userinfo.userinfo.userpassword}
                onChange={changeHandler}
              />
              <br />
              <label>Phonenumber:</label>
              <input
                type="number"
                name={"usernumber"}
                defaultValue={userinfo.userinfo.usernumber}
                onChange={changeHandler}
              />
              <br />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button
              variant="primary"
              onClick={() => EditUser(userinfo.userinfo.id)}
            >
              EDIT
            </button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
};

export default Editmodal;
