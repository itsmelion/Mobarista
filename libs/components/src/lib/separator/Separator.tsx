import { View } from 'dripsy';
import { PixelRatio } from 'react-native';

export const Separator = () => (
  <View
    sx={{
      width: '100%',
      height: PixelRatio.get() * 0.5,
      bg: '#FFFFFF',
      mb: '$2',
    }}
  />
)
