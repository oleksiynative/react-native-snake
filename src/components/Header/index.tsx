import React, {FC, useMemo, memo} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import PlayIcon from 'assets/svg/play_icon.svg';
import PauseIcon from 'assets/svg/pause_icon.svg';
import RefreshIcon from 'assets/svg/refresh_icon.svg';
import {rem} from 'utils';
import {Colors} from 'config';

import {getStyle} from './styles';

interface HeaderProps {
  score: number;
  isPaused: boolean;
  reloadGame: () => void;
  pauseGame: () => void;
}

const HeaderComponent: FC<HeaderProps> = memo(
  ({score, isPaused, reloadGame, pauseGame}) => {
    const styles = useMemo(() => getStyle(), []);

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={reloadGame}>
          <RefreshIcon
            fill={Colors.background}
            width={rem(32)}
            height={rem(32)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={pauseGame}>
          {!isPaused ? (
            <PauseIcon
              fill={Colors.background}
              width={rem(32)}
              height={rem(32)}
            />
          ) : (
            <PlayIcon
              fill={Colors.background}
              width={rem(32)}
              height={rem(32)}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.score}>{score}</Text>
      </View>
    );
  },
);

export default HeaderComponent;
