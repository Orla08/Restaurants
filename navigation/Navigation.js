import React from 'react'
import {NavigationContainer} from '@react-navigation/native' //Solo puede haber un navigation contianer dentro del proyecto
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import RestaurantStack from './RestaurantStack';
import AccountStack from './AccountStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStack';
import Restaurant from '../screens/restaurants/Restaurant';



const Navigation = () => {


  const Tab = createBottomTabNavigator(); //En la variable tab instanciamos la clase de create-B-N
    //Dentro de la navegacion meteremos un tab navigator que es la navegacion inferior
    //Dentro de esa navegacio iran las screens

  const screenOptions = (route, color)=>{
    let iconName
    switch (route.name) {
      case "Restaurant": //Si el nombre de la ruta es este 
          iconName = "compas-outline" //Muestre este icono de material
        break;
        case "Favorites":
          iconName="heart-outline"
        break
        case "TopRestaurants":
          iconName="star-outline"
        break
        case "Search":
          iconName="magnify"
        break
        case "Account":
          iconName="home-outline"
        break
    }

    return (
        <Icon 
          type="material-community" //El tipo es la Libreria de iconos
          name = {iconName} //Nombre del icono es el que le le asignamos arriba 
          size = {22} //tamaño del icono
          color = {color} //el color que leva en la funcion
        />
      )
  }


  return (
    <NavigationContainer> 
        <Tab.Navigator
            initialRouteName="Restaurant" //Esta sera la pantalla inicial
            tabBarOptions ={{
              inactiveTintColor: "#cea982", //Color que lleva cuando esta inactivo el icono
              activeTintColor :"#f4963c"  //Color que lleva cuando esta activo el icono o sea el screnn
            }}
            screenOptions={({ route }) =>({
              tabBarIcon:({color}) => screenOptions(route, color)
            })}
        >
            <Tab.Screen 
            name="Restaurant" 
            component={RestaurantStack}
            options={{title:"Restaurantes",
                      headerShown: false
          }}
            />
            <Tab.Screen 
            name="Favorites" 
            component={FavoritesStack}
            options={{title:"Favoritos",
                      headerShown: false
          }}
            />
            <Tab.Screen 
            name="TopRestaurants" 
            component={TopRestaurantsStack}
            options={{title:"Top 5",
                      headerShown: false
          }}
            />
            <Tab.Screen 
            name="Search" 
            component={SearchStack}
            options={{title:"Buscar",
                      headerShown: false
          }}
            />
            <Tab.Screen 
            name="Account" 
            component={AccountStack}
            options={{title:"Cuenta",
                      headerShown: false
          }}
            />
            
            
            
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation