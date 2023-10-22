import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import DashBoard from "../pages/Dashboard";
import Profile from "../pages/Profile";
const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

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
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default AppStack;
