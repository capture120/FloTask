import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import AppLoading from "expo-app-loading";
// import TerraAuthWidget from "../components/terraAuthWidget";

import {
  useFonts,
  Inconsolata_200ExtraLight,
  Inconsolata_300Light,
  Inconsolata_400Regular,
  Inconsolata_500Medium,
  Inconsolata_600SemiBold,
  Inconsolata_700Bold,
  Inconsolata_800ExtraBold,
  Inconsolata_900Black,
} from "@expo-google-fonts/inconsolata";

export default function DashBoard() {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  const getUserStats = async () => {
    const results = await axios.get("http://localhost:3000/api/users/stats");
    console.log(results);
  };

  const [isLoaded] = useFonts({
    Inconsolata_200ExtraLight,
    Inconsolata_300Light,
    Inconsolata_400Regular,
    Inconsolata_500Medium,
    Inconsolata_600SemiBold,
    Inconsolata_700Bold,
    Inconsolata_800ExtraBold,
    Inconsolata_900Black,
  });

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Feather
              name="menu"
              size={24}
              color="#BF9460"
              style={styles.menuIcon}
            />
            <View style={styles.centeredDateContainer}>
              <Text style={styles.dateText}>{formattedDate}</Text>
            </View>
            <Feather
              name="user"
              size={24}
              color="#BF9460"
              style={styles.profileIcon}
            />
          </View>

          <Text style = {styles.sectionTitle}>Today's tasks</Text>

          <Image source={require('../../assets/logo.png')} style={styles.image} />
          

          <View style={styles.widgetContainer}>
            {/* Widget 1 */}
            <View style={[styles.widget, { backgroundColor: '#FFE29F' }]}>
              {/* Content of Widget 1 */}
            </View>

            {/* Widget 2 */}
            <View style={[styles.widget, { backgroundColor: '#FFF5D0' }]}>
              {/* Content of Widget 2 */}
            </View>

            {/* Widget 3 */}
            <View style={[styles.widget, { backgroundColor: '#FFCB12' }]}>
              {/* Content of Widget 3 */}
            </View>

            {/* Widget 4 */}
            <View style={[styles.widget, { backgroundColor: '#FFDB8A' }]}>
              {/* Content of Widget 4 */}
            </View>
          </View>

          {/* <TerraAuthWidget/> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFECCC",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    padding: 10,
  },
  centeredDateContainer: {
    flex: 1,
    alignItems: "center",
  },
  menuIcon: {
    position: "absolute",
    left: 10,
  },
  dateText: {
    fontSize: 20,
    fontFamily: "Inconsolata_700Bold",
    color: "black",
  },
  profileIcon: {
    position: "absolute",
    right: 10,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 300, // Set the width of the image
    height: 100, // Set the height of the image
    resizeMode: "contain", // Set the image resize mode
  },
  sectionTitle: {
    fontSize: 30,
    marginTop: 8,
    marginLeft: 15,
    fontFamily: "Inconsolata_700Bold",
    color: "black",
  },
  widgetContainer: {
    flexDirection: "column", // Set vertical direction
    paddingHorizontal: 60,
    marginTop: 160,
  },
  widget: {
    backgroundColor: "#FFDB8A", // Widget background color
    borderRadius: 10,
    padding: 70,
    marginBottom: 27, // Spacing between widgets
    alignItems: "center",
    justifyContent: "center",
  },
});
