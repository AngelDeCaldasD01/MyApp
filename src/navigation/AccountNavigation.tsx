import { createStackNavigator } from '@react-navigation/stack';
import { Account } from '../screens';

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  )
}