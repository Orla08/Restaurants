import React from 'react'
import {NavigationContainer} from '@react-navigation/native' //Solo puede haber un navigation contianer dentro del proyecto
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Account from '../screens/Account' //Las pantallas se importan sin el {}
import Search from '../screens/Search' //Las pantallas se importan sin el {}
import Favorites from '../screens/Favorites' //Las pantallas se importan sin el {}
import TopRestaurants from '../screens/TopRestaurants' //Las pantallas se importan sin el {}
import RestaurantStack from './RestaurantStack';
import AccountStack from './AccountStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStack';


const Navigation = () => {


    const Tab = createBottomTabNavigator(); //En la variable tab instanciamos la clase de create-B-N
    //Dentro de la navegacion meteremos un tab navigator que es la navegacion inferior
    //Dentro de esa navegacio iran las screens
  return (
    <NavigationContainer> 
        <Tab.Navigator>
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