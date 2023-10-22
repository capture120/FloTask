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

export default function Profile() {
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
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <Feather
              name="menu"
              size={24}
              color="#BF9460"
              style={styles.menuIcon}
            />

            <Feather
              name="user"
              size={24}
              color="#BF9460"
              style={styles.profileIcon}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.customContainer}>
              {}
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerBox}>
              <View style={styles.firstFooterContainer}>
                <Feather
                  name="home"
                  size={24}
                  color="black"
                  style={styles.homeIcon}
                />
              </View>
             
            </View>
            <View >
                <Feather
                  name="book"
                  size={20}
                  color="black"
                  style={styles.notesIcon}
                />
              </View>
              <View>
                <Feather
                  name="calendar"
                  size={20}
                  color="black"
                  style={styles.calendarIcon}
                />
              </View>
              <View>
                <Feather
                  name="book"
                  size={20}
                  color="black"
                  style={styles.bookIcon}
                />
              </View>
          </View>
        </ScrollView>
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

  menuIcon: {
    position: "absolute",
    left: 10,
    top: 10,
  },

  profileIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    marginTop: 180,
  },
  scrollView: {
    backgroundColor: "#FFECCC",
    marginHorizontal: 20,
  },
  customContainer: {
    backgroundColor: "#FFDB8A",
    width: 358,
    height: 215,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 4, // For Android
  },
  footer: {
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    marginTop: 350, // Add marginTop to move the footer down
  },
  footerBox: {
    width: 305,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFF5D0",
  },
  firstFooterContainer: {
    flexDirection: "row",
    width: 90,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFE29F",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  homeIcon: {
    position: "absolute",
  },
  
  notesIcon: {
    width: 22.5,
    height: 30,
    marginLeft: -40, // Adjust this value for the desired horizontal position
    marginTop: -35, // Adjust this value for the desired vertical position
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarIcon: {
    width: 22.5,
    height: 30,
    marginLeft: 70,
    marginTop: -35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bookIcon: {
    width: 22.5,
    height: 30,
    marginLeft: 210,
    marginTop: -35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  
});
