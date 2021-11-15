require('dotenv').config()
const express = require("express")
const cors = require("cors");
const db = require('./db')
//var morgan = require('morgan')
app.use(cors());
const app = express()
//app.use((req,res,next)=>{
//    console.log('middle ware')
//    next()
//})
app.use(express.json())
//app.use(express.urlencoded({ extended: true }))
//get all restaurants
app.get('/api/v1/restaurants',async (req,res) =>{
    //res.send('show restaurants')
    try{
    const results = await db.query('select * from restaurants;')
    res.status(200).json({
        status:"200",
        results: results.rows.length,
        data:{
        restaurant:results.rows,
        }
    })
    }catch (err){
        console.log(err)
    }
})
//get a restaurant //SELECT * FROM restaurants where name = 'McDo';
app.get('/api/v1/restaurants/:id',async (req,res) =>{
    try{
        //`select * from restaurants where id = ${req.params.id}` easily got attacked
        const results = await db.query(
            "select $1 from restaurants where id = $2",['name',req.params.id])
        res.status(200).json({
            status:"200",
            data:{
            restaurant:results.rows[0],
            }
        })
        }catch (err){
            console.log(err)
        }
})
//create a restaurant
app.post('/api/v1/restaurants/', async (req,res) =>{
    try{
        const results = await db.query(
            "INSERT INTO restaurants (id, name, location, price_range) values (1,$1, $2, $3) returning *",
            [req.body.name, req.body.location, req.body.price_range])
        res.status(200).json({
            status:"200",
            data:{
            restaurant:results.rows[0],
            }
        })
        }catch (err){
            console.log(err)
        }
})
app.put('/api/v1/restaurants/:id', async (req,res) =>{
    try{
        const results = await db.query(
            "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
            [req.body.name, req.body.location, req.body.price_range, req.params.id])
        res.status(200).json({
            status:"200",
            data:{
            restaurant:results.rows[0],
            }
        })
        }catch (err){
            console.log(err)
        }
})
app.delete('/api/v1/restaurants/:id', async (req,res) =>{
    try{
        await db.query(
            "DELETE FROM restaurants where id = $1 ",
            [req.params.id])
        res.status(200).json({
            status:"200"
        })
        }catch (err){
            console.log(err)
        }
})
const port = process.env.port ||3000
app.listen(port,() =>{
    console.log(`server up ${port}`)
})