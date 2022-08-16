const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const pool = require("./model/db");

// getting all the data of the employee
app.get("/", async (req, res) => {
  const getAll = await pool.query(`select * from pernlogintab`);
  //res  is server related
  //req.body is frontend related
  res.json(getAll.rows);
  console.log(getAll.rows);
});
// sendind all the data to backend
app.post("/register", async (req, res) => {
  try {
    const { data } = req.body;
    const registerUser = await pool.query(
      `insert into pernlogintab (username,useremail,userpassword,usernumber) values($1,$2,$3,$4) returning *`,
      [data.name, data.email, data.password, data.number]
    );
    res.json(registerUser.rows);
    console.log(registerUser.rows);
  } catch (error) {
    console.log(error.message);
  }
});
// deleting the user
app.delete("/removeuser/:id", async (req, res) => {
  const { id } = req.params;
  const deleteUser = await pool.query(
    `delete from  pernlogintab  where id=$1`,
    [id]
  );
  res.json("deleted");
});
// edit Todo
app.put(`/edituser/:id`, async (req, res) => {
  const { id } = req.params;
  const editUser = await pool.query(
    `update pernlogintab set username=$1,useremail=$2,userpassword=$3,usernumber=$4 where id=$5`,
    [
      req.body.username,
      req.body.useremail,
      req.body.userpassword,
      req.body.usernumber,
      id,
    ]
  );
  res.json("Edited");
});

const port = 8000;
app.listen(port, () => {
  console.log(`app is listening in ${port}`);
});
