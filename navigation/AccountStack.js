
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Account from '../screens/Account';

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Account"
        component={Account}
        options={{title:"Cuenta"}}
        />
    </Stack.Navigator>
  )
}

export default AccountStack