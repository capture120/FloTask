import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import axios from "axios";

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
} from '@expo-google-fonts/inconsolata';

export default function DashBoard() {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  const getUserStats = async () => {
    const results = await axios.get("http://localhost:3000/api/users/stats");
    console.log(results);
  };

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
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <FontAwesome
            name="smile-o"
            size={24}
            color="#FFCB12"
            style={styles.icon}
          />
          <FontAwesome
            name="smile-o"
            size={24}
            color="#FFCB12"
            style={styles.icon}
          />
        </View>
        {/* Add your dashboard content here */}
      </View>
    </SafeAreaView>
  );
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
    color: "black",
    fontWeight: "bold",
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 20,
  },
});

