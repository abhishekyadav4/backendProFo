
import dotenv from 'dotenv'
dotenv.config();

const port = process.env.Port || 5000;

import { app } from './app.js';
import { dbConnection } from './db/conn.js';

dbConnection()
app.listen(port, ()=>{
    console.log("server runnig at port", port)
})