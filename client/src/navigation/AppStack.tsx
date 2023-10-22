import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import DashBoard from "../pages/Dashboard";

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Dashboard" component={DashBoard} />
    </Stack.Navigator>
  );
};

export default AppStack;
