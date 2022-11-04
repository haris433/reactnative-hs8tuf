import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home.js'
import AddItem from './screens/addItem.js'
import EditItem from './screens/editItem.js'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{ title: "hs8tuf"}}
        />
        <Stack.Screen
        name="AddItem"
        component={AddItem}
        options={{ title: "Add Item"}}
        />
        <Stack.Screen
        name="EditItem"
        component={EditItem}
        options={{ title: "Edit Item"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
