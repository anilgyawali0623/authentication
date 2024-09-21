import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
 
    console.log("froent edn pass word", password)
  const hashedPassword = bcryptjs.hashSync(password, 10);
   console.log(hashedPassword);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    // saving all into the data base

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // next(error);
     console.log(next)
  }
};
