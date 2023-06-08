import {Account, Favorite, Pokedex} from '../screens/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Account" component={Account} options={{
            tabBarLabel:"Account",
            headerTitle:"Account"
          }}/>
          <Tab.Screen name="Pokedex" component={Pokedex} options={{
            tabBarLabel:"Pokedex",
            headerTitle:"Pokedex",
            headerShown: false
          }}/>
          <Tab.Screen name="Favourites" component={Favorite} options={{
            tabBarLabel:"Favourites",
            headerTitle:"Favourites"
          }}/>
        </Tab.Navigator>
    );
  }