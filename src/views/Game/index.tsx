import React, {
  FC,
  useMemo,
  memo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import {LayoutChangeEvent, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SnakeComponent from 'components/Snake';
import FoodComponent from 'components/Food';
import {
  checkGameOver,
  getGameBounds,
  getGameSize,
  getRandomFood,
  sleep,
} from 'utils';
import {
  BoundSizeType,
  BoundsType,
  CoordinateType,
  DirectionEnum,
  GestureEventType,
} from 'types';
import {
  FOOD_INITIAL_POSITION,
  MOVE_INTERVAL,
  SCORE_INCREMENT,
  SNAKE_INITIAL_POSITION,
} from 'config';

import {getStyle} from './styles';
import HeaderComponent from 'components/Header';

const GameComponent: FC = memo(() => {
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => getStyle(insets), [insets]);
  const [direction, setDirection] = useState<DirectionEnum>(
    DirectionEnum.Right,
  );
  const [snake, setSnake] = useState<CoordinateType[]>(SNAKE_INITIAL_POSITION);
  const [food, setFood] = useState<CoordinateType>();
  const [bounds, setBounds] = useState<BoundsType>();
  const [size, setSize] = useState<BoundSizeType>();
  const [score, setScore] = useState<number>(0);
  const [isGameOver, setGameOver] = useState<boolean>(false);
  const [isPaused, setPaused] = useState<boolean>(true);

  useEffect(() => {
    if (!isGameOver) {
      const intervalId = setInterval(() => {
        !isPaused && moveSnake();
      }, MOVE_INTERVAL - score);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [snake, direction, isGameOver, isPaused, bounds]);

  const moveSnake = () => {
    const snakeHead = snake[0];
    const newHead = {...snakeHead};

    if (!bounds || !food) {
      return;
    }

    if (checkGameOver(snakeHead, bounds)) {
      setGameOver(prev => !prev);
      return;
    }

    switch (direction) {
      case DirectionEnum.Up: {
        newHead.y -= 1;
        break;
      }
      case DirectionEnum.Down: {
        newHead.y += 1;
        break;
      }
      case DirectionEnum.Left: {
        newHead.x -= 1;
        break;
      }
      case DirectionEnum.Right: {
        newHead.x += 1;
        break;
      }
      default: {
        break;
      }
    }

    if (newHead.x === food.x && newHead.y === food.y) {
      setFood(getRandomFood(bounds));
      setSnake([newHead, ...snake]);
      setScore(score + SCORE_INCREMENT);
    } else {
      setSnake([newHead, ...snake.slice(0, -1)]);
    }
  };

  const handleGesture = useCallback(
    (event: GestureEventType) => {
      if (isPaused || isGameOver) {
        return;
      }

      const {translationX, translationY} = event.nativeEvent;
      if (Math.abs(translationX) > Math.abs(translationY)) {
        if (translationX > 0) {
          setDirection(DirectionEnum.Right);
        } else {
          setDirection(DirectionEnum.Left);
        }
      } else {
        if (translationY > 0) {
          setDirection(DirectionEnum.Down);
        } else {
          setDirection(DirectionEnum.Up);
        }
      }
    },
    [isPaused, isGameOver, snake, direction],
  );

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    const gameBounds = getGameBounds({width, height});
    const gameSize = getGameSize(gameBounds);
    const randomFood = getRandomFood(gameBounds);
    setBounds(gameBounds);
    setSize(gameSize);
    setFood(randomFood);
  };

  const handleReloadGame = () => {
    setSnake(SNAKE_INITIAL_POSITION);
    setFood(FOOD_INITIAL_POSITION);
    setGameOver(false);
    setScore(0);
    setDirection(DirectionEnum.Right);
    setPaused(true);
  };

  const handlePauseGame = () => {
    setPaused(!isPaused);
  };

  return (
    <PanGestureHandler onGestureEvent={handleGesture}>
      <View style={styles.container}>
        <HeaderComponent
          score={score}
          isPaused={isPaused}
          reloadGame={handleReloadGame}
          pauseGame={handlePauseGame}
        />
        <View style={styles.wrap} onLayout={handleLayout}>
          <View style={[styles.boundaries, size]}>
            <SnakeComponent snake={snake} />
            {food && <FoodComponent {...food} />}
          </View>
        </View>
      </View>
    </PanGestureHandler>
  );
});

export default GameComponent;
