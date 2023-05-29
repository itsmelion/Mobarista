import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '@happynrwl/components';

import * as brewStack from './brew';
import * as machineStack from './machine';

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName={machineStack.stackName}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={machineStack.stackName}
        component={machineStack.MachineStack}
      />

      <Stack.Screen
        name={brewStack.stackName}
        component={brewStack.BrewStack}
      />
    </Stack.Navigator>
  )
}
