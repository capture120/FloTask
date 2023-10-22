import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import CustomComponent from "../components/CustomComponent";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/landinglogo.png")}
        style={styles.image}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFECCC",
  },
  text: {
    fontSize: 78, // Adjust the font size as needed
    color: "#E32636",
  },
  image: {
    height: 58,
    width: 410,
  },
});

/*
<View style={styles.button}>
    <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
    />
</View>
*/
