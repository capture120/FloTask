import React, {useEffect} from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RobotoMono_400Regular,
  RobotoMono_500Medium,
  RobotoMono_700Bold,
} from '@expo-google-fonts/roboto-mono';
import TerraAuthWidget from "../components/TerraAuthWidget";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native'; 




export default function Landing({ navigation }) {

  useEffect(() => {
    // setTimeout(() => {
    //   navigation.navigate("Home");
    // }, 1200);
  }, []);


  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/landinglogo.png")}
        style={styles.image}
        resizeMode="center"
      />
      <Button title="Home" onPress={() => navigation.navigate("Home")}></Button>
      <Button
        title="Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      ></Button>
      <Button
        title="Profile"
        onPress={() => navigation.navigate("Profile")}
      ></Button>




      <Button title="Open drawer" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />

      {/* <TerraAuthWidget /> */}
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
    width: 200,
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



