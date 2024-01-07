const express = require('express')
const app = express()
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes = require("./routes/Payment")
const port = 5000
const mongoDB = require("./db");

mongoDB();

app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.use(express.json())
app.use('/api', require("./routes/CreateUser"));
app.use('/api', require("./routes/DisplayData"));
app.use('/api', require("./routes/OrderData"));

//environment variables
// dotenv.config();

//middlewares
// app.use(express.json());
// app.use(cors());

//routes
// app.use("/api/payment/",paymentRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})