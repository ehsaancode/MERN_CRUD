const express = require("express")
// const mongoose = require("mongoose")
//importing User schema and model from userModel.js || it will automatically create database with the name of User and inssert values from the schema provided
const User = require("../Model/userModel")

const router = express.Router()

//POST
router.post("/", async(req, res)=>{
    const {name, email, age} = req.body;
    try{
        const userAdded = await User.create({
            name:name,
            age:age,
            email:email
        })
        res.status(200).json(userAdded)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})


//get 
router.get("/", async (req, res)=>{
    
    try{
        const dataAll = await User.find()
        res.status(200).json(dataAll)

    }catch(error){
        res.status(400).json({error: error.message})
    }
})

//find a user
router.get("/:id", async (req, res)=>{
    const {id} = req.params
    try{
        const singleUser = await User.findById({_id : id})
        res.status(200).json(singleUser)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

//patch - modify user data
router.patch("/:id", async(req, res)=>{
    const {name, email, age} = req.body
    const {id} = req.params

    try{
        const updateUser = await User.findByIdAndUpdate(id, req.body, {
            new:true
        })
        res.status(200).json(updateUser)
    }catch(error){
        res.status(400).json("error", error.message)
    }
})

//delete a user
router.delete("/:id", async (req, res)=>{
    const {id} = req.params
    try{
        const singleUser = await User.findByIdAndDelete({_id : id})
        res.status(200).json(singleUser)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})



module.exports = router