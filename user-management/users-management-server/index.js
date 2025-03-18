const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const userList = 
   [
      { id: 1, name: "John Doe", email: "johndoe@example.com", age: 30 },
      { id: 2, name: "Jane Smith", email: "janesmith@example.com", age: 25 },
      { id: 3, name: "Alice Johnson", email: "alicejohnson@example.com", age: 28 },
      { id: 4, name: "Bob Brown", email: "bobbrown@example.com", age: 35 },
      { id: 5, name: "Charlie Davis", email: "charliedavis@example.com", age: 40 },
      { id: 6, name: "Emily White", email: "emilywhite@example.com", age: 22 },
      { id: 7, name: "Frank Harris", email: "frankharris@example.com", age: 33 },
      { id: 8, name: "Grace Lewis", email: "gracelewis@example.com", age: 27 },
      { id: 9, name: "Henry Clark", email: "henryclark@example.com", age: 29 },
      { id: 10, name: "Ivy Walker", email: "ivywalker@example.com", age: 31 }
    ];

app.get('/',(req, res)=>{
    res.send('Server is running')
})

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = userList.length + 1;
    console.log("api hitting",user);
    userList.push(user);
    res.send(userList);
  });

app.get('/users', (req, res) => {
    res.send(userList);
  });

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})