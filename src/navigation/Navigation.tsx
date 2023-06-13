import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Account, Pokedex, Favorite } from '../screens';
import { API_KEY } from '@env';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  console.log(API_KEY)

    return (
        <Tab.Navigator>
          <Tab.Screen name="Account" component={Account} options={{
            tabBarLabel:"Account",
            headerTitle:"Account",
            headerShown: false

          }}/>
          <Tab.Screen name="Pokedex" component={Pokedex} options={{
            tabBarLabel:"Pokedex",
            headerTitle:"Pokedex",
            headerTitleStyle: {width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center'},
            tabBarIcon: () => <Image
            source={require("./../assets/images/pokeball.png")}
            style={{ width: 65, height: 65, top: -17 }}
          />
          }}/>
          <Tab.Screen name="Favourites" component={Favorite} options={{
            tabBarLabel:"Favourites",
            headerTitle:"Favourites",
            headerShown: false

          }}/>
        </Tab.Navigator>
    );
  }