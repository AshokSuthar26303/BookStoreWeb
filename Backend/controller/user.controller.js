// we define the functions in the controller 
import User from "../model/User.model.js";
import bcryptjs from "bcryptjs";
export const signup=async(req,res)=>{
        try {
            const {fullname,email,password}=req.body  // we define the data from the body or json file 
            const user=await User.findOne({ email })  //find if user is loggedin or not through email here user is our database
            if(user){
                return res.status(400).json({message:"User already exists"})
            }

            const hashPassword=await bcryptjs.hash(password,10) //here 10digit is more secure you can also pass like 8 but not more secure

            // if user is not exists or new user then
            const createdUser=new User({ // here new User is our collection or table name where the data will be save 
                fullname:fullname,email:email,password:hashPassword,
            });

           await createdUser.save() //save method is used for save the data in the database
            res.status(201).json({message:"user created successfully",user:{
                _id:createdUser._id,
                fullname:createdUser.fullname,
                email:createdUser.email,
            }})
         
        } catch (error) {
            console.log("Error" + error.message);
            res.status(500).json({message:"Internal server error"})
            
        }
}


export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password)  // user.password is database password ans password is which user input the password

        if(!user || !isMatch)
        {
            return res.status(400).json({message:"invalid username or password"})
        }else
        {
            res.status(200).json({message:"Login successfull" ,user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email

            }})
        }


    } catch (error) {
        console.log("Error:" + error.message);
        res.status(500).json({message:"Internal server error"})

        
    }
}
