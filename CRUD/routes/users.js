import express from "express";

const routes=express.Router();

routes.get("/",(req,res)=>{
    res.send("task manager")
})

export default routes;