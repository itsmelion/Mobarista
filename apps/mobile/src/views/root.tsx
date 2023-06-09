import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as brewStack from './brew';
import * as machineStack from './machine';

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName={machineStack.stackName}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={machineStack.MachineStack}
        name={machineStack.stackName}
      />

      <Stack.Screen
        component={brewStack.BrewStack}
        name={brewStack.stackName}
      />
    </Stack.Navigator>
  )
}
