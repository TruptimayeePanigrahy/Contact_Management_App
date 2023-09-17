const express = require("express")
const {contactmodel}=require("../Model/contactmodel")
const route = express.Router()



route.get("/contacts",async (req,res)=>{
    try {
        let allpost=await contactmodel.find()
        res.status(200).send({"contacts":allpost})
    } catch (error) {
        res.status(500).send({ error: 'An error occurred' });
    }
})

route.get("/user/:id",async (req,res)=>{
    try {
        let {id}=req.params
        console.log(id)
        let post=await contactmodel.find({_id:id})
        res.status(200).send({"contacts":post})
    } catch (error) {
       res.status(500).send({ error: 'An error occurred.' });
    }
})

route.post("/contacts",async (req,res)=>{
    try {
        let {name,number,email}=req.body
        let newpost=new contactmodel(req.body)
        await newpost.save()
        res.status(200).send({"msg":"Contact save successfull"})
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while adding' });
    }
})


route.put("/contacts/:id",async(req,res)=>{
    try {
        let {id}=req.params
        console.log(req.body)
        let updatedata=await contactmodel.findByIdAndUpdate(id,req.body)
        res.status(200).send({"msg":"Contact update successfull"})
    } catch (error) {
       res.status(500).send({ error: 'An error occurred while editing.' });
    }
})

route.delete("/contacts/:id",async(req,res)=>{
    try {
        let {id}=req.params
        let updatedata=await contactmodel.findByIdAndDelete(id)
        res.status(200).send({"msg":"Contact delete successfull"})
        
    } catch (error) {
       res.status(500).send({ error: 'An error occurred while deleting.' });
    }
})

route.get("/sort/:name", async (req, res) => {
    try {
        let {name}=req.params
        let data=await contactmodel.find().sort({name:name})
        res.status(200).send({"msg":data})

    } catch (error) {
       res.status(500).send({ error: 'An error occurred while sorting.' });

    }
})

route.get("/api/search", async (req, res) => {
    try {
        const { query } = req.query;
        console.log(query)
     const results = await contactmodel.find({ name: { $regex: query, $options: 'i' } });

    res.status(200).send({"msg":results});
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while searching' });
    }

})



module.exports={
    route
}