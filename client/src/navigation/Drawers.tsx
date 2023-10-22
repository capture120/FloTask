import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import DashBoard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const Drawer = createDrawerNavigator();

function Drawers() {
    return (
      <Drawer.Navigator initialRouteName="Home">
  
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Dashboard" component={DashBoard} />
      </Drawer.Navigator>
    );
  }

export default Drawers;