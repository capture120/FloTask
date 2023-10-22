import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigation/AppStack";

export default function App() {
  const theme = extendTheme({
    fontConfig: {},
    colors: {},
  });
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <AppStack />
        </NativeBaseProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFECCC",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 80,
    width: 80,
  },
});
