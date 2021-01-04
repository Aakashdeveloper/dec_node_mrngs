const express = require('express');
const app = express();
const port = process.env.PORT || 9800;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongourl = "mongodb://localhost:27017";
let db;
let col_name="dashusers";

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//health Check
app.get('/health',(req,res) => {
    res.status(200).send('Health Ok')
});

//insert users
app.post('/addUser',(req,res) => {
    db.collection(col_name).insert(req.body,(err,result) => {
        if(err) throw err;
        res.status(200).send("Data Added")
    })
});

//get users
app.get('/users',(req,res) => {
    var query = {}
    if(req.query.id){
        query={_id:Number(req.query.id),isActive:true}
    }else if(req.query.city){
        query={city:req.query.city,isActive:true}
    }else{
        query= {isActive:true}
    }
    db.collection(col_name).find(query).toArray((err,result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
})

//updateuser
app.put('/updateUser',(req,res) => {
    db.collection(col_name).update(
        {_id:Number(req.body._id)},
        {
            $set:{
                name:req.body.name,
                city:req.body.city,
                phone:req.body.phone,
                isActive:true
            }

        },(err,result) => {
        if(err) throw err;
        res.status(200).send("Data updated")
    })
});

//delete
app.delete('/deleteUser',(req,res) => {
    db.collection(col_name).remove({_id:req.body._id},(err,result) => {
        if(err) throw err;
        res.status(200).send("Data Remove")
    })
});

MongoClient.connect(mongourl,(err,connection) => {
    if(err) console.log(err);
    db = connection.db('decnode');
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
})