import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "../screens/Home";
import Details from '../screens/Details'
import Contact from '../screens/Contact'


const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

function Footer() {
    return(
      <></>
    )
}

export default function Routes() {
    return(
        <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen
                name="Home"
                component={Home}
                />
                <Drawer.Screen
                    name="Details"
                    component={Details}
                />
                <Drawer.Screen
                    name="Contact"
                    component={Contact}
                />
        </Drawer.Navigator>
    )
}