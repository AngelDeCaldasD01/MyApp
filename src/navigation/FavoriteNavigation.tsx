import { createStackNavigator } from '@react-navigation/stack';
import { Favorite } from '../screens';

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  )
}