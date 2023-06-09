import { MachineNFCSvg } from '@happynrwl/components';
import { useMachine } from '@happynrwl/services';
import { useNavigation } from '@react-navigation/native';
import { Text, SafeAreaView, View } from 'dripsy';


export const config = {
  viewName: 'RecognizeMachine',
  title: 'Tab the machine to start',
};

export function RecognizeMachine() {
  const navigation = useNavigation();

  useMachine('60ba1ab72e35f2d9c786c610', {
    onSuccess: (data) => navigation.replace('brewStack', { machineName: data.machineName }),
  });

  return (
    <SafeAreaView sx={{ flex: 1, bg: '$background' }}>
      <MachineNFCSvg style={{ flex: 4, width: '100%', alignSelf: 'center' }} />

      <View sx={{ flex: 1, p: '$4' }}>
        <Text>How does this work</Text>
      </View>
    </SafeAreaView>
  );
}
