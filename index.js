const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require('./db');

app.use(cors())
app.use(express.json()) 

app.use('/api/food/',require('./Routers/FoodItemRoutes'));
app.use('/api/student/',require('./Routers/studentRoute'));
app.use('/api/distribution/',require('./Routers/distributionsRoute'));

app.get('/',(req,res)=>res.send("Hello World !! "));

app.listen(port,()=>console.log(`Listening Port From ${port}`));