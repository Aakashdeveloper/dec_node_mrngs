var express = require('express');
var app = express();
var port = 8900;

var menu = [
    {link:'/', name:'Home'},
    {link:'/hotel', name:'Hotels'},
    {link:'/city', name:'City'},
    {link:'/city', name:'About'}
]

var hotelRouter = require('./src/routes/hotelRoutes')(menu);
var cityRouter = require('./src/routes/cityRoutes')(menu);

//static file path
app.use(express.static(__dirname+'/public'));
//html
app.set('views','./src/views');
//view engine
app.set('view engine','ejs')


app.get('/',function(req,res){
    //res.send('Welcome to express')
    res.render('index',{title:'Home Page',menu:menu})
});

app.use('/hotel',hotelRouter);
app.use('/city',cityRouter);

app.listen(port,function(err){
    if(err) throw err;
    console.log("Server is running on port "+port)
})