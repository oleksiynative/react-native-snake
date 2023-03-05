import {BLOCK_SIZE} from 'config';
import React, {FC, useMemo, memo, Fragment} from 'react';
import {View} from 'react-native';
import {CoordinateType} from 'types';
import {rem} from 'utils';

import {getStyle} from './styles';

interface SnakeProps {
  snake: CoordinateType[];
}

const SnakeComponent: FC<SnakeProps> = memo(({snake}) => {
  const styles = useMemo(() => getStyle(), []);

  return (
    <Fragment>
      {snake.map((el: CoordinateType, index: number) => {
        const elStyle = {
          left: el.x * Math.floor(rem(BLOCK_SIZE)),
          top: el.y * Math.floor(rem(BLOCK_SIZE)),
        };
        return <View style={[styles.snake, elStyle]} key={index} />;
      })}
    </Fragment>
  );
});

export default SnakeComponent;
