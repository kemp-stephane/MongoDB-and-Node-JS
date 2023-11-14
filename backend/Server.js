const express = require('express');
const mongoose =require("mongoose");
const cors= require ("cors");  
require("dotenv").config();

const routes = require('./routes/Route')
const Cars = require('./models/Model')

const app=express();

app.use(express.json());
app.use(cors());

//get a product
app.get('/cars', async (req, res) =>{
  try {
      const cars = await Cars.find({})
      res.status(200).json(cars)
  } catch (error) { 
  }
})

//create a product
app.post('/cars', async(req,res) =>{

  try {
      const cars = await Cars.create(req.body)
      res.status(200).json(cars)
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message:error.message})
  }
})

//update a product
app.put('/cars/:id', async(req,res)=> {
    try {
        const {id} =req.params;
        const cars = await Cars.findByIdAndUpdate(id, req.body);
        if(!cars){
            return res.status(404).json({message:`cannot find any product with ID ${id}`})
        }
        const updatedCars = await Cars.findById(id);
        res.status(200).json(updatedCars);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//delete a product
app.delete('/cars/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const cars = await Cars.findByIdAndDelete(id, req.body);
        if(!cars){
            return res.status(404).json({message:`cannot find any product with ID ${id}`})
        }
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


mongoose.connect('mongodb+srv://kemp:CmRaWyLwfi3n4qnw@kemp-12.vbyfa0v.mongodb.net/test2',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
  .then(() => {
      console.log('Connected!')
    })
    .catch((error)=>{
      console.log(error)
  })

  app.use('/api',routes)


app.listen(5000, ()=> {console.log("Server is running on port 5000")});