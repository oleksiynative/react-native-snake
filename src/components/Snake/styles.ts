import {StyleSheet} from 'react-native';
import {BLOCK_SIZE, Colors} from 'config';
import {rem} from 'utils';

export const getStyle = () => {
  const styles = StyleSheet.create({
    snake: {
      width: Math.floor(rem(BLOCK_SIZE)),
      height: Math.floor(rem(BLOCK_SIZE)),
      borderRadius: Math.floor(rem(BLOCK_SIZE)),
      backgroundColor: Colors.primary,
      position: 'absolute',
    },
  });
  return styles;
};
