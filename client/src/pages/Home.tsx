import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  View,
  Image,
} from "react-native";
import CustomComponent from "../components/CustomComponent";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Hi, welcome to</Text>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
        
    

        <Button
          title="Get Started"
          onPress={() => navigation.navigate("Landing")}
        ></Button>
      </View>
    </SafeAreaView>
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
    textAlign: "center",
    fontFamily: "Roboto-Mono",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 30,
  },
  image: {
    height: 200,
    width: 200,
  },
});
