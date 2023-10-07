import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2";

// const express = require("express");
// const dotenv = require("dotenv");

dotenv.config();

const app = express();


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"newdatabase"
})


//get homepage
app.get("/",(req,res)=>{
    res.json("This is the backend");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`);
})