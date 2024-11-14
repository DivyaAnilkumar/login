const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes')
const app = new express();
app.use(cors())

require('dotenv').config()
const PORT = process.env.PORT

require('./db/connection');
app.use('/', userRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})