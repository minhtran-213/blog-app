import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonserver from "../api/jsonserver";

const BlogContext = React.createContext();
const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogPost":
      return action.payload;
    case "delete_blogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "edit_blogPost":
      return state.map((blogPost) =>
        blogPost.id === action.payload.id ? action.payload : blogPost
      );
    default:
      return state;
  }
};
const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonserver.get("/blogposts");
    dispatch({ type: "get_blogPost", payload: response.data });
  };
};
const addBlogPost = (dispatch) => {
  return async (title, content, callBack) => {
    await jsonserver.post("/blogposts", { title, content });
    if (callBack) {
      callBack();
    }
  };
};
const deletePost = (dispatch) => {
  return async (id) => {
    await jsonserver.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

const editPost = (dispatch) => {
  return async (id, title, content, callBack) => {
    await jsonserver.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "edit_blogPost", payload: { id, title, content } });
    if (callBack) {
      callBack();
    }
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deletePost, editPost, getBlogPost },
  []
);
