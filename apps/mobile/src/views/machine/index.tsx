import { Header } from '@happynrwl/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as recognizeMachineView from './RecognizeMachine';

export const stackName = 'machineStack';

const Stack = createNativeStackNavigator();

export function MachineStack() {
  return (
    <Stack.Navigator
      initialRouteName={recognizeMachineView.config.viewName}
      screenOptions={{ header: Header, headerTitle: `Dark Roasted Beans` }}>
      <Stack.Screen
        component={recognizeMachineView.RecognizeMachine}
        initialParams={{ title: recognizeMachineView.config.title }}
        name={recognizeMachineView.config.viewName}
      />
    </Stack.Navigator>
  );
}
