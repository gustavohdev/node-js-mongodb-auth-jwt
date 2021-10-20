const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corOptions))

app.use(bodyParser.urlencoded({extended:true}))


app.get('/', (req,res) =>{
    res.json('Welcome to my application')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () =>{
    console.log('server ready')
})