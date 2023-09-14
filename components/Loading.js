import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Overlay } from 'react-native-elements'
import { ActivityIndicator } from 'react-native-web'

const Loading = ({ isVisible , text}) => {
  <Overlay
  isVisible={isVisible}
  windowBackgroundColor="rgba(0,0,0,0.5)"
  overLayBackgroundColor="transparent"
  overlayStyle={styles.overlay} >
    <View>
        <ActivityIndicator/>
        {
            text && <Text>{text}</Text>
        }
    </View>
  </Overlay>
}

export default Loading

const styles = StyleSheet.create({
    overlay:{
        height: 40,
        width: 40,
        backgroundColor:'#fff',
        borderColor:'##915a2c',
        borderWidth:2,
        borderRadius:10
    }
})