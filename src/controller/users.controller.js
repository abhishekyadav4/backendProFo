import { Funhub } from "../models/user.model.js";

const userReg = async (req, res) => {
    try {

        const userData = req.body;
       const email = userData.email;
       const password = userData.password;
       const cPassword = userData.cPassword;
       

        // Check if any field in userData is an empty string
        const hasEmptyField = Object.values(userData).some(value => value === "");
        if (hasEmptyField) {
            return res.status(400).send("All fields are required");
        };

        const existedEmail = await Funhub.findOne({email});
        if(existedEmail){
            return res.status(400).json({ message:"email already exist", exists: existedEmail})
        }

        if (password !== cPassword) {
            return res.status(400).send("Passwords do not matched");
          }

        const user = await Funhub.create({
            ...userData
        })

        console.log(user)
        return res.status(200).send("data stored in db")


    } catch (error) {
        console.log(error, "ine userRed")
    }
}

const getAllUsersDetail = async(req,res)=>{
    try {
        let result = await Funhub.find();
        res.status(200).json({
            message: "data sent succefuly",
            result
        })
    } catch (error) {
        console.log(error, "in getAll User details")
    }
}


const deleteUser = async(req,res)=>{
    try {
        
        // console.log(req.params.id)
        const userId = req.params.id;
        let result = await Funhub.findByIdAndDelete(userId);
        res.status(200).json({
            message: "user deleted",
            response: result
        })
        
    } catch (error) {
        console.log(error, "in delte user")
    }
};


const getUserDetail = async(req, res)=>{
    try {
    
        const userId  = req.params.id;

        const userData = await Funhub.findById(userId);

        if(userData){
            res.status(200).json({
                message: "data updated successfully",
                userData
            })
        }
        
    } catch (error) {
        console.log(error, "error in getUser detail")
    }
}

const updateUser = async(req,res)=>{
    try {
        const userid = req.params.id;
        const userData = req.body;

        const updateRes = await Funhub.findByIdAndUpdate(userid,
            {
                ...userData
            }
        )

        if(!updateRes) return res.status(400).json({error: "user not found"});

res.json(updateRes)

    } catch (error) {
        console.log(error, " in  update user")
    }
}

export { userReg,getAllUsersDetail,deleteUser , getUserDetail,updateUser};