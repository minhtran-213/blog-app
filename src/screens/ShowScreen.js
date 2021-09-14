import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const id = navigation.getParam("id");
  const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Feather name="edit" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};
