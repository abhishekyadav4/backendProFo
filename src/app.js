
import express from 'express';
// import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

app.use(express.json({limit:"16kb"}));
// app.use(bodyParser.json())
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"));
app.use(cors());

import UserRouter from './routes/user.route.js'

app.use("/api/v1/user", UserRouter);

export {app}