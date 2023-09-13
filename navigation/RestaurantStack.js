
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Restaurant from '../screens/Restaurant';

const Stack = createStackNavigator();

const RestaurantStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Restaurant"
        component={Restaurant}
        options={{title:"Restaurantes"}}
        />
    </Stack.Navigator>
  )
}

export default RestaurantStack