const express = require('express')
const morgan = require('morgan')
const app = express()
const mysql =require('mysql')
//creates a connection string
app.use(express.json()) //allows your server to receive a body
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456789',
    database:"avengers"
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

//FRONTEND

//SELECT
//app.get('/select',(req,res)=>{
   // let sql= "SELECT * FROM avengers";
    // db.query (sql,(err,result)=>{
    //     if(err){
    //         throw err;}
    //         console.log(result);
    //         res.send(result)
    //     });
    // });
//Update
app.get('/UpdatePost/:name',(req,res)=>{
let newTitle= 'Data updated!'
console.log(req.body)
let sql= `UPDATE avengers SET url= '${req.body.url}' WHERE name ='${req.params.name}'`
db.query (sql,(err,result)=>{
    if(err){
        throw err;}
        console.log(result);
        res.send(result)
}); 
});
//delete
app.get('/DeletePost/:name',(req,res)=>{
    let sql= `DELETE FROM avengers WHERE name ='${req.params.name}'`;
    db.query (sql,(err,result)=>{
        if(err){
            throw err;}
            console.log(result);
            res.send(result)
}); });

//adding
app.get('/AddingPost/',(req,res)=>{
    console.log (req.body)
    let sql=`INSERT INTO avengers(url, name,gender) VALUES ("${req.body.url}","${req.body.name}","${req.body.gender}")`
     //"Adding FROM  WHERE id= $ {req.params.id}";
    db.query (sql,(err,result)=>{
        if(err){
            throw err;}
            console.log(result);
            res.send(result)
}); });
    //sorting
    app.get('/sorting',(req,res)=>{
        let sql= "SELECT * FROM avengers";
        db.query (sql,(err,result)=>{
            if(err){
                throw err;}
                console.log(result);
                res.send(result)
            });
        });
        //data
        app.get('/data',(req,res)=>{
            let sql= "SELECT * FROM avengers";
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
;})
