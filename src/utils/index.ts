import {BLOCK_SIZE} from 'config';
import {Dimensions} from 'react-native';
import {BoundSizeType, BoundsType, CoordinateType} from 'types';
const {width} = Dimensions.get('screen');

export const rem = (val: number) => {
  return (width / 375) * val;
};

export const sleep = (ms: number) =>
  new Promise((r: any) => {
    setTimeout(r, ms);
  });

export const checkGameOver = (
  snakeHead: CoordinateType,
  boundaries: BoundsType,
): boolean => {
  return (
    snakeHead.x < boundaries.minX ||
    snakeHead.x > boundaries.maxX ||
    snakeHead.y < boundaries.minY ||
    snakeHead.y > boundaries.maxY
  );
};

export const getGameBounds = (size: BoundSizeType): BoundsType => {
  const bounds: BoundsType = {
    minX: 0,
    maxX: Math.floor(Math.floor(size.width) / Math.floor(rem(BLOCK_SIZE))),
    minY: 0,
    maxY: Math.floor(Math.floor(size.height) / Math.floor(rem(BLOCK_SIZE))),
  };
  return bounds;
};

export const getGameSize = (bounds: BoundsType): BoundSizeType => {
  const size: BoundSizeType = {
    width: bounds.maxX * Math.floor(rem(BLOCK_SIZE)),
    height: bounds.maxY * Math.floor(rem(BLOCK_SIZE)),
  };
  return size;
};

export const getRandomFood = (bounds: BoundsType): CoordinateType => {
  return {
    x: Math.floor(Math.random() * bounds.maxX),
    y: Math.floor(Math.random() * bounds.maxY),
  };
};
