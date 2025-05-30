const express = require("express")
const fetchMatches = require("../services/fetchMatch")
const routes = express.Router();


routes.get('/',async(req,res)=>{

        
    try{
        const respo = await fetchMatches();
        res.json(
            respo
        );

    }
    catch(err){
        console.log(err);
    }


})

module.exports = routes;