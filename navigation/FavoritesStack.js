
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Favorites from '../screens/Favorites';

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Favorites"
        component={Favorites}
        options={{title:"Favoritos"}}
        />
    </Stack.Navigator>
  )
}

export default FavoritesStack