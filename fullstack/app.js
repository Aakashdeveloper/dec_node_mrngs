var express = require('express');
var app = express();
var port = 8900;
var data = [
    {
      "_id": 1,
      "city_name": "Delhi",
      "city": 1,
      "country_name": "India"
    },
    {
      "_id": 3,
      "city_name": "Pune",
      "city": 3,
      "country_name": "India"
    },
    {
      "_id": 2,
      "city_name": "Mumbai",
      "city": 2,
      "country_name": "India"
    },
    {
      "_id": 4,
      "city_name": "Chandigarh",
      "city": 4,
      "country_name": "India"
    },
    {
      "_id": 5,
      "city_name": "Goa",
      "city": 5,
      "country_name": "India"
    },
    {
      "_id": 6,
      "city_name": "Manali",
      "city": 6,
      "country_name": "India"
    }
  ]


app.get('/',function(req,res){
    res.send('Welcome to express')
});

app.get('/movies',function(req,res){
    res.send(data)
})

app.listen(port,function(err){
    if(err) throw err;
    console.log("Server is running on port "+port)
})