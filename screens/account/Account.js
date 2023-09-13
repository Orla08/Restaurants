import { StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'
import {isUserLogged} from '../../utils/Actions'
import UserLogged from './UserLogged'
import UserGuest from './UsserGuest'

const Account = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    setLogin(isUserLogged());
  },[])

  if(login === null){
    return<Text>Cargando...</Text>
  }

  return login ? <UserLogged/> : <UserGuest/>
    
}

const styles = StyleSheet.create({})


export default Account