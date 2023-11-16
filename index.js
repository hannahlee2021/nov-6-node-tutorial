// console.log("hello")

//import the express library amd assign it to a variable
import express from 'express'
import {sentence} from 'txtgen'

let names = ['Sun', 'Sanchi', 'Tench']

let people = {
    "0": {
        name: "Sun",
        sign: "Leo"
    },
    "1": {
        name: "Sanchi",
        sign: "Libra"
    },
    "2": {
        name: "Tench",
        sign: "Libra"
    }
}

let drinks = {
    "latte": {
        size: "small",
        price: 2.79
    },
    "espresso": {
        size: "small",
        price: 1.00
    },
    "matcha": {
        size: "large",
        price: 3.20
    }
}

//create an instance of express application
const app = express();
app.use(express.json())

//set the port the application will run on
const port = process.env.PORT || 3001

console.log("hellooooooo")

// set up response for the root path of application
// / = root
// app.get('/firstName/:firstName/lastName/:lastName', (req,res)=> {
//     // res.send("draw an orange")

//     // res.json({
//     //     data: "response hello"
//     // })
//     console.log(req.params)
//     res.json({
//         data:`The full name is ${req.params.firstName} ${req.params.lastName}`
//     })

//     console.log(req.query)
// })

// app.get('/firstName/:firstName/', (req,res)=> {

//     if (req.params.firstName == ":Laiyi") {
//         Object.keys(people).forEach((key,value) => {
//             console.log(people[key].sign)
//         })
//     }
   
// })


/*query
www.google.com?nae=Laiyi
req.query

url params
www.google.com/id/:bluebird
req.params
*/

// app.get('/', (req,res) => {
//     if(req.query.letter == "S") {
//         names.forEach(name => {
//             if(name.)
//         })
//     }
// })

app.get('/firstName/:firstName/', (req,res) => {
    let signs = [];
    Object.keys(people).forEach((key,value) => {
        let n = `:${people[key].name}`
        if(req.params.firstName == n){
            console.log(people[key].sign)
            signs.push(people[key].sign)
        }
    })
})



app.get('/', (req,res) => {
    // console.log("what")
    let matches = [];
    if(req.query.letter == "S") {
        names.forEach( name => {
            if(name.includes("S") || name.includes("s")) {
                console.log(name)
                matches.push(name)
            }
            else {
                console.log("letter is not S")
            }
        })
    }
    res.send(matches)
})

//using txtgen (random sentence generator) npm package 
app.get("/txtgen", (req,res) => {
    const randomSentence = sentence();
    res.send(randomSentence)
} )


//set up the application to listen on the specified port 
app.listen(port,() => {
    console.log(`example app listening on port ${port}`)

})

