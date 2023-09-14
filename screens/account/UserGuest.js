import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Loading from '../../components/Loading'

const UserGuest = () => {
  return (
    <View>
      <Text>UsserGuest....</Text>
      <Loading isVisible={true} text='Cargando'/>
    </View>
  )
}

export default UserGuest

const styles = StyleSheet.create({})