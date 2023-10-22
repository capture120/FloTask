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
import TerraAuthWidget from "../components/terraAuthWidget";

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

          <View style = {styles.container}>
            <Image source={require('../../assets/health.png')} style = {styles.IconImage} />
            {/* Add your dashboard content here */}
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
  iconContainer: {
    alignItems: "center",
  },
  IconImage: {
    width: 200,
    height: 200
  },
  scrollView: {
    backgroundColor: "#FFECCC",
    marginHorizontal: 20,
  },
});
