import { createStackNavigator } from '@react-navigation/stack';
import { Pokedex } from '../screens';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={Pokedex} />
    </Stack.Navigator>
  )
}