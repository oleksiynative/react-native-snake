import {StyleSheet} from 'react-native';
import {Colors} from 'config';
import {rem} from 'utils';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: rem(12),
      paddingVertical: rem(8),
      backgroundColor: Colors.background,
      borderBottomColor: Colors.primary,
      borderBottomWidth: rem(4),
    },
    button: {
      width: rem(42),
      height: rem(42),
      borderRadius: rem(42),
      backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    score: {
      fontSize: rem(24),
      fontWeight: 'bold',
      color: Colors.primary,
    },
  });
  return styles;
};
