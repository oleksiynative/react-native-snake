import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import GameComponent from 'views/Game';

const App: FC = () => {
  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <SafeAreaProvider>
        <GameComponent />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
