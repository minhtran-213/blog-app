import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const BlogContext = React.createContext();
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
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

const addBlogPost = (dispatch) => {
  return (title, content, callBack) => {
    dispatch({ type: "add_blogPost", payload: { title, content } });
    if (callBack) {
      callBack();
    }
  };
};
const deletePost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

const editPost = (dispatch) => {
  return (id, title, content, callBack) => {
    dispatch({ type: "edit_blogPost", payload: { id, title, content } });
    if (callBack) {
      callBack();
    }
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deletePost, editPost },
  []
);
