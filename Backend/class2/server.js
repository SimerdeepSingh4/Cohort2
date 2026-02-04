const express = require('express');

const app = express(); //creating an instance of a server

app.get('/',(req,resp)=>{
    resp.send('hello world')
})

app.get('/home',(req,resp)=>{
    resp.send('This is Home Page')
})
app.get('/about',(req,resp)=>{
    resp.send('This is About Page')
})
app.get('/profile',(req,resp)=>{
    resp.send('This is Profile Page')
})

app.listen(3000,()=>{
    console.log('server started at http://localhost:3000/'); // server started at the localhost port number 3000 
}) 


