const express = require("express");
const mysql =require('mysql');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"

})
app.post('/signup', (req,res) => {
    const sql ="INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    
    const values=[
        req.body.name,
        req.body.email,
        req.body.password 
    ] 
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.post('/login', (req,res) => {
    const sql ="SELECT * FROM login WHERE `email` = ? AND `password` = ? " ;
    db.query(sql, [req.body.email,req.body.password ], (err, data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success");
        } else{
            return res.json("Failed");
        }
    })
})
app.post('/update', (req,res) => {
    const sql ="UPDATE login SET `name`=?  `age`=?, `gender`=?, `dob`=?, `mobile no`=? WHERE `id` = ? ";
    
    const values=[
        req.body.name,
        req.body.age,
        req.body.gender,
        req.body.dob,
        req.body.mobile   
    ] 
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.listen(8081, ()=>{
    console.log("listening");

})