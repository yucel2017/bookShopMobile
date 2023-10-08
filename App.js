import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BooksScreen from './src/pages/BooksScreen';
import CartScreen from './src/pages/CartScreen';
import { NavigationContainer } from '@react-navigation/native';
import ShoppingCartIcon from './src/components/ShoppingCartIcon';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Books" component={BooksScreen}
            options={{ headerRight: props => <ShoppingCartIcon {...props} /> }} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}