import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Agreement from './pages/agreement';
import Greeting from './pages/greeting';
import Menu from './pages/menu';
import Shop from './pages/shop';
import Game from './pages/game';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {store} from './store/store';
import {Provider} from 'react-redux';
import {useAppSelector} from './hooks/redux';

export type RootStackParamList = {
  Agreement: undefined;
  Greeting: undefined;
  Menu: undefined;
  Shop: undefined;
  Game: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const persistor = persistStore(store);

  console.log(store.getState().main.isUserAgree);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {!store.getState().main.isUserAgree ? (
              <Stack.Group>
                <Stack.Screen name="Agreement" component={Agreement} />
              </Stack.Group>
            ) : null}
            <Stack.Group>
              <Stack.Screen name="Greeting" component={Greeting} />
              <Stack.Screen name="Menu" component={Menu} />
              <Stack.Screen name="Game" component={Game} />
              <Stack.Screen name="Shop" component={Shop} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
