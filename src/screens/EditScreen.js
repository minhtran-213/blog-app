import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
const EditScreen = ({ navigation }) => {
  const { state, editPost } = useContext(BlogContext);
  const id = navigation.getParam("id");

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValue={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
