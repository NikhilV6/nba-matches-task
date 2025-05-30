const express = require("express")
const cors = require("cors")
const app = express();
const PORT = 3000;
 const matchRoutes = require('../backend/routes/matches')
app.use(cors());


app.use('/api/matches',matchRoutes);

app.get('/', (req,res)=>{

    console.log("hello")

     res.send({msg:"hellp"});
})


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})