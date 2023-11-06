// console.log("hello")

//import the express library amd assign it to a variable
import express from 'express'

//create an instance of express application
const app = express();

//set the port the application will run on
const port = process.env.PORT || 3001

//set up response for the root path of application
// / = root
app.get('/', (req,res)=> {
    res.send("draw an orange")
})

//set up the application to listen on the specified port 
app.listen(port,() => {
    console.log(`example app listening on port ${port}`)

})