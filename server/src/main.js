const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // unblocking cors policy
app.use(express.json()); // this will help to read the data coming in body :: TEXT to JSON

const dbadduser = require("./db.add.user");
const dbreaduser=require("./db.read.user");
const dbdeleteuser=require("./db.delete.user");
const dbupdateuser=require("./db.update.user");


// created an API
// learnt how to read the input; coming from client.
// http://localhost:3600/adduser?username=hello

app.get("/a", async (req, res) => {
  try {
       
    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "failure" });
  }
});

app.get("/adduser", async (req, res) => {
  try {
    // lets read the query parameter
    const input = req.query;

    // calling db logic :: async :: non blocking
    await dbadduser.addUser(input);
    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "failure" });
  }
});

app.get("/readuser", async (req, res) => {
  try {
    // lets read the query parameter
    const input = req.query;
    // calling db logic :: async :: non blocking
    await dbreaduser.readUser(input);
   
    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "failure" });
  }
});
app.get("/updateuser", async (req, res) => {
  try {
    // lets read the query parameter
    const input = req.query;
    // calling db logic :: async :: non blocking
    await dbupdateuser.updateUser(input);
   
    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "failure" });
  }
});

app.get("/deleteuser", async (req, res) => {
  try {
    // lets read the query parameter
    const input = req.query;

    // calling db logic :: async :: non blocking
    await dbdeleteuser.deleteUser(input);
    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "failure" });
  }
});
// POST API :: FOR TESTIG POSTMAN :: ANDROID :: IOS :: BROWSER
// http://localhost:3600/adduser
app.post("/adduser", async (req, res) => {
  try {
    const input = req.body; // before doing this // app.use(express.json());

    await dbadduser.addUser(input);
    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});
app.post("/auth-user", async (req, res) => {
  try {
    const input = req.body; // before doing this // app.use(express.json());

    await dbadduser.authUser(input);
    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});



app.get("/admin", async (req, res) => {
  try {
    // lets read the query parameter
    const input = req.query;
5
    // calling db logic :: async :: non blocking
    res.send("admin page");
    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "failure" });
  }
});

//error message for page not found response
app.use((req,res,next)=>{
  res.send("Page Not Found");
  });
  !
// started teh server.
app.listen(3600);