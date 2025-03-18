const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors());
app.use(express.json());


//////////////////  Database  MongoDB    //////////////

const uri = "mongodb+srv://user-management:EEiqpqrxfXeAPJY7@cluster0.0hyfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


/////////////////  Back end APIs  /////////////////


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