const express = require("express")
const routes = require('./routes/product')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const mongoose = require('mongoose')


const app = express()
const router = express.Router()
const url = "mongodb://localhost:27017/mealmaker" //|| process.env.MONGODB_URI

//connect to the database
try {
  mongoose.connect(url,{useNewUrlParser: true})
} catch (err) {
  console.log("Problems with connecting to mongoDB.")
}

console.log("hello");


let port = 5000 //|| process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(helmet())

//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
