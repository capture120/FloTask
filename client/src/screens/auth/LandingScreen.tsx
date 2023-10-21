import { KeyboardAvoidingView, Text, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from "react-native-responsive-screen";

export default function LandingScreen({ route, navigation }) {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View height={h("80%")} justifyContent="center" alignItems="center">
          <Text fontSize={50} fontWeight={600}>
            Landing Page
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
