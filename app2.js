// Activity 

const express = require('express');
const app = express()

app.use(express.json())

const arr = []

app.get('/all',(req,res)=>{
    console.log('GET /ex1')
    res.json(arr)
})

app.post('/newElem',(req,res)=>{
    console.log(req.body)
    arr.push(req.body)
    res.json('Success to add new element')
})

app.listen(5000,()=>{
    console.log('SERVER WORKING on PORT 5000 ...')
})