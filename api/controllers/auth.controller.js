import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  console.log("froent edn pass word", password);
  const hashedPassword = bcryptjs.hashSync(password, 10);
  console.log(hashedPassword);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    // saving all into the data base

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // next(error);
    console.log(next);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // we have to first does it exist in the database or not

    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(400, "user doesnot exist"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "wrong passsword"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_TOKEN);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
