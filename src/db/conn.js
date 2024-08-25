
import mongoose from 'mongoose';
import { db_Name } from '../constants.js';


export const dbConnection = async()=>{

    try {
        let dbconn = await mongoose.connect(`${process.env.DB_URL}/${db_Name}`);

        if(dbconn){
            console.log("db connected successfully");
        }
    } catch (error) {
        console.log('error in dbConnection', error);
    }
}