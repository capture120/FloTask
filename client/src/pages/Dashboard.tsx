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

        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <Image
          source={require("../../assets/tree.png")}
          style={styles.treeimage}
        />
        <Image
          source={require("../../assets/health.png")}
          style={styles.image}
        />

        <View style={styles.widgetContainer}>
          {/* Widget 1 */}
          <View style={[styles.widget, { backgroundColor: "#FFE29F" }]}>
            <Image
              source={require("../../assets/med-yellow.png")}
              style={styles.widgetImage}
            />
            {/* Content of Widget 1 */}
          </View>

          {/* Widget 2 */}
          <View style={[styles.widget, { backgroundColor: "#FFF5D0" }]}>
            <Image
              source={require("../../assets/lightyellow.png")}
              style={styles.widgetImage}
            />
            {/* Content of Widget 2 */}
          </View>

          {/* Widget 3 */}
          <View style={[styles.widget, { backgroundColor: "#FFCB12" }]}>
            <Image
              source={require("../../assets/darkyellow.png")}
              style={styles.widgetImage}
            />
            {/* Content of Widget 3 */}
          </View>

          {/* Widget 4 */}
          <View style={[styles.widget, { backgroundColor: "#FFDB8A" }]}>
            <Image
              source={require("../../assets/dark-med.png")}
              style={styles.widgetImage}
            />
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
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 300, // Set the width of the image
    height: 100, // Set the height of the image
    resizeMode: "contain", // Set the image resize mode
    marginLeft: 45,
  },
  logo: {
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
    resizeMode: "contain", // Set the image resize mode
    marginLeft: 45,
  },
  treeimage: {
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
    resizeMode: "center", // Set the image resize mode
    marginLeft: 100,
  },
  sectionTitle: {
    fontSize: 30,
    marginTop: 8,
    marginLeft: 15,
    fontFamily: "Inconsolata_700Bold",
    color: "black",
  },
  widgetImage: {
    width: 500, // Set the width of the image
    height: 100, // Set the height of the image
    resizeMode: "contain", // Set the image resize mode
  },
  widgetContainer: {
    flexDirection: "column", // Set vertical direction
    paddingHorizontal: 30,
    marginTop: 9,
  },
  widget: {
    backgroundColor: "#FFDB8A", // Widget background color
    borderRadius: 10,
    padding: 30,
    marginBottom: 27, // Spacing between widgets
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 4,
  },
});
