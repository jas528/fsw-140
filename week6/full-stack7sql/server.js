const express = require('express')
const morgan = require('morgan')
const app = express()
const mysql =require('mysql')
//creates a connection string

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456789'
});
// establish a connection
db.connect((err)=>{
    if (err){
    throw err;
}
    console.log ("avengers database!")
});

//SET UP SERVER
app.use(morgan('dev'))


//CREATE A TEST DATABASE
app.get('/select',(req,res)=>{
    let sql= "SELECT * FROM avengers";

    //RUN te SQL Command
    db.query (sql,(err,result)=>{
        if(err){
            throw err;}
            console.log(result);
            res.send(result)
        });
    });
//OPEN AND LISTEN FROM PORT
app.listen(4000, () => {
    console.log('avengers database send sucessfully')
});