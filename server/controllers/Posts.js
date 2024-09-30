import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";


dotenv.config();






//get all posts
export const getAllPosts = async (req, res, next) => {
    try {
      const posts = await Post.find({});
      return res.status(200).json({ success: true, data: posts });
    } catch (error) {
      next(
        createError(
          error.status,
          error?.response?.data?.error?.message || error?.message
        )
      );
    }
  };