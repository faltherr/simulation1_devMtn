const express = require("express")
const bodyParser = require ("body-parser")
const massive = require('massive');
require('dotenv').config()
const cors = require("cors")

const app = express();

//Require your controller
const pc = require('./controller')
//Setup database conncetion
massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db)

    var db=app.get('db')
}).catch( err => {
    console.log ('Error conencting to data base:', err)})


app.use(bodyParser.json());
app.use(cors())

//REST API Here
app.get('/api/inventory', pc.getProduct)
app.post('/api/inventory', pc.addProduct)
app.delete('/api/inventory/:id', pc.deleteItem)


const port = 3009;

app.listen(port, () => {
    console.log("Listening on port", port)
})
