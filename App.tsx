/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import NavigationHandler from './src/navigations/navigationHandler';
import {store} from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationHandler />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
