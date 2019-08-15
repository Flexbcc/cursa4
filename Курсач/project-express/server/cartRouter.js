const express = require('express');
const fs = require('fs');
const handler = require('./handler');
const router = express.Router();


router.get('/api/products' , (req , res)=> {
    fs.readFile('./server/db/userCart.json' , 'utf-8' , (err, data) =>{
        if (err){
            res.send(404,JSON.stringify({result: 0 , text: err}));
        } else{
            res.send(data);
        } 
    });
});

router.post('/',(req, res) => {
    handler(req,res,'add' ,'./db/userCart.json');
});

router.put('/',(req, res) => {
    handler(req,res,'add' ,'./db/userCart.json');
});