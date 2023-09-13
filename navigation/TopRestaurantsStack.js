
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import TopRestaurants from '../screens/TopRestaurants';

const Stack = createStackNavigator();

const TopRestaurantsStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="TopRestaurants"
        component={TopRestaurants}
        options={{title:"Top 5"}}
        />
    </Stack.Navigator>
  )
}

export default TopRestaurantsStack