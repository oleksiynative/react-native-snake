import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';
import {Colors} from 'config';
import {rem} from 'utils';

export const getStyle = (insets: EdgeInsets) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      backgroundColor: Colors.primary,
    },
    wrap: {
      flex: 1,
      alignItems: 'center',
    },
    boundaries: {
      backgroundColor: Colors.background,
      overflow: 'hidden',
    },
  });
  return styles;
};
