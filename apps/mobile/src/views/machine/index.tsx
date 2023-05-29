import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '@happynrwl/components';

import * as recognizeMachineView from './RecognizeMachine';

export const stackName = 'machineStack';

const Stack = createNativeStackNavigator();

export function MachineStack() {
  return (
    <Stack.Navigator
      initialRouteName={recognizeMachineView.config.viewName}
      screenOptions={{ header: Header, headerTitle: `Dark Roasted Beans` }}>
      <Stack.Screen
        name={recognizeMachineView.config.viewName}
        component={recognizeMachineView.RecognizeMachine}
        initialParams={{ title: recognizeMachineView.config.title }}
      />
    </Stack.Navigator>
  );
}
