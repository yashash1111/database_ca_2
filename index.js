const express = require("express");
const booksSchema = require("./schema");
const {resolve} = require("path");
const { default: mongoose } = require("mongoose");
const { title } = require("process");
const { error } = require("console");
require("dotenv").config();

const app = express();
const PORT = 3010;

app.use(express.json())

mongoose.connect('mongodb+srv://yashashrs70:yashash87920@databaseca2.q5egd.mongodb.net/db?retryWrites=true&w=majority&appName=databaseca2')
.then(()=>console.log("Connected to Database"))
.catch((err)=>console.log("Error connecting to Database"))

app.listen(PORT, ()=>{
    console.log(`Server is running in https://localhost:${PORT}`);
})

// POST METHOD
app.post("/api/users", async(req,res)=>{
    try{
        const {title,names,genre} = req.body;
        
        if(!title || !names || !genre){
            return res.status(400).send("All fields are required")
        }
        const items = ({title,names,genre});
        if(!items){
            res.status(404).send("Item not found")
        }
        items.save();
        console.log(items);
    }
        catch(err){
            res.status(500).send("Internal Server Error")
        }
})

// GET METHOD
app.get("api/items/:id", async(req,res)=>{
    try{
        const {id} = req.query;
        const items = ({title,names,genre}).find();

        if(!items){
            res.status(404).send("Item not found")
        }
        console.log(items)
        
        items.save();
        res.json(items)
    }
    catch(err){
        res.status(500).send("Internal Server Error")
    }

})

// PUT METHOD
app.put("api/items/", async(req,res)=>{
    try{
        const items = ({title,names,genre}).findById(id);

        if(!items){
            res.status(404).send("Item not found")
        }
        await items.save();
        res.status(200).status("Item added succesfully")
        
    }
    catch(err){
        res.status(500).send("Internal Server Error")
    }

})

// DELETE METHOD
app.delete("api/items/:id", async(req,res)=>{
    try{
        const {id} = req.query;
        const items = ({title,names,genre}).findByIdAndDelete(id);

        if(!items){
            res.status(404).send("Items not found")
        }
        res.status(200).json({error: "Deleted items succesfully", items})
    }
    catch(err){
        res.status(500).send("Internal Server Error")
    }

})