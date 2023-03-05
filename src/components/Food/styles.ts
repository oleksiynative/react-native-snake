import {BLOCK_SIZE} from 'config';
import {StyleSheet} from 'react-native';
import {rem} from 'utils';
import {FoodProps} from '.';

export const getStyle = (props: FoodProps) => {
  const styles = StyleSheet.create({
    food: {
      textAlign: 'center',
      width: Math.floor(rem(BLOCK_SIZE)),
      height: Math.floor(rem(BLOCK_SIZE)),
      position: 'absolute',
      top: props.y * Math.floor(rem(BLOCK_SIZE)),
      left: props.x * Math.floor(rem(BLOCK_SIZE)),
    },
  });
  return styles;
};
