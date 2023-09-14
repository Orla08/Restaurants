import { StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'
//import firebase from 'firebase/app'

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

const Account = () => {
  const [login, setLogin] = useState(null);

   /*  firebase.auth().onAuthStateChanged((user) =>{
      //Ingresamos a la clase auth y luego accedemos a un metodo de esa clase llamada onAuthStateChange()
     user !== null ? (setLogin(true)) : (setLogin(false))
  }) 
 
  if(login === null){
    return<Text>Cargando...</Text>
  }*/

  return login ? <UserLogged/> : <UserGuest/> 
 
}

const styles = StyleSheet.create({})


export default Account



/* import { StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

const Account = () => {
  const [login, setLogin] = useState(null);

  return login ? <UserGuest/> : <UserLogged/>;
 
}

const styles = StyleSheet.create({})


export default Account */