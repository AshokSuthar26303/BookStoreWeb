// before define the route we need to use express
import express from "express"
import { signup ,login } from "../controller/user.controller.js"  //import the signup function 
const router=express.Router();

router.post('/signup',signup) // /signup the function is called which we define in the controller 
router.post('/login',login) // /login the function is called which we define in the controller 

export default router





// Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\Users\ashok\OneDrive\Desktop\MernStack\Backend\controller\user.controller' imported from C:\Users\ashok\OneDrive\Desktop\MernStack\Backend\route\user.route.js   solution is below given 👇 

// when we import any file in ES module the we need full path of the module like import route from "./book.route.js"  here i mean to say that don't forgot to put .js last the file 