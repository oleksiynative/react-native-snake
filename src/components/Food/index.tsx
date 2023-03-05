import React, {FC, useMemo, memo} from 'react';
import {Text} from 'react-native';
import {CoordinateType} from 'types';

import {getStyle} from './styles';

export interface FoodProps extends CoordinateType {}

const FoodComponent: FC<FoodProps> = memo(props => {
  const styles = useMemo(() => getStyle(props), [props]);

  const randomFruit = () => {
    const fruits = ['🍇', '🍈', '🍉', '🍊', '🍋'];
    const index = Math.floor(Math.random() * fruits.length);
    return fruits[index];
  };

  return (
    <Text style={styles.food} adjustsFontSizeToFit>
      {randomFruit()}
    </Text>
  );
});

export default FoodComponent;
