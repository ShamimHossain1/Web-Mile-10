const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

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
        const Database = client.db("userDB");
        const haiku = Database.collection("users");


        /////////////////  Back end APIs  /////////////////

        app.get('/users', async(req, res) => {
            const result = await haiku.find().toArray();
            res.send(result);
        });

        app.get('/users/:id', async(req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await haiku.findOne(query);
            res.send(result);
        });

        app.post('/users', async (req, res) => {
            const user = req.body;
            console.log("user", user);
            const result = await haiku.insertOne(user);
            res.send(result);
        });

        app.put('/users/:id',async(req,res)=>{
            const id = req.params.id;
            const user = req.body;
            console.log(user);
            const filter = {_id: new ObjectId(id)};
            const options = {upsert: true};
            const updatedUser = {
                $set:{
                    name: user.name,
                    email: user.email
                }
            }
            const result = await haiku.updateOne(filter,updatedUser,options);
            res.send(result);
        })

        app.delete('/users/:id',async(req, res)=>{
            const id = req.params.id;
            console.log(id);
            const query = { _id: new ObjectId(id) };
            const result = await haiku.deleteOne(query);
            res.send(result);
        });



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('Server is running')
})



// app.post('/users', (req, res) => {
//     const user = req.body;
//     user.id = userList.length + 1;
//     console.log("api hitting",user);
//     userList.push(user);
//     res.send(userList);
//   });


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})