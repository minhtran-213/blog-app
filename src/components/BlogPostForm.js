import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValue }) => {
  const [title, setTitle] = useState(initialValue.title);
  const [content, setContent] = useState(initialValue.content);

  return (
    <View>
      <Text style={styles.label}>Enter title</Text>
      <TextInput
        value={title}
        onChangeText={(newText) => setTitle(newText)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter content</Text>
      <TextInput
        value={content}
        onChangeText={(newText) => setContent(newText)}
        style={styles.input}
      />
      <Button title="Save" onPress={() => onSubmit(title, content)} />
    </View>
  );
};
BlogPostForm.defaultProps = {
  initialValue: {
    title: "",
    content: "",
  },
};
export default BlogPostForm;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 5,
  },
});
