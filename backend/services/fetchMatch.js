
const axios = require("axios")
module.exports = async()=>{

    try{
        const match = await axios.get("https://www.thesportsdb.com/api/v1/json/123/eventsnextleague.php?id=4387");

        return match.data.events
    }
    catch(err){
        console.log(err);
        throw err;
    }
}