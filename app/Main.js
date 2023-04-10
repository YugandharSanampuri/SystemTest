import React, {useEffect, useState} from 'react';
import AuthNavigation from './Navigation/AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setTokenFunction} from './redux/actions/AuthAction';
import DrawerNavigation from './Navigation/DrawerNavigation';
import { MenuProvider } from 'react-native-popup-menu';
import AsyncStorage from '@react-native-community/async-storage';
const Main = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(async() => {
    let Userdata=await AsyncStorage.getItem('Userdata')
    dispatch(setTokenFunction(changeUserAuthStatus));
    if(Userdata){
      setIsUserLoggedIn(true)
    }else{
      setIsUserLoggedIn(false)
    }
  }, []);

  const changeUserAuthStatus = (status = isUserLoggedIn) => {
    setIsUserLoggedIn(status);
  };

  return (
    <NavigationContainer>
                  <MenuProvider style={{ backgroundColor: '#ffff' }}>

                  {isUserLoggedIn ? <DrawerNavigation /> : <AuthNavigation />}
      </MenuProvider>
    </NavigationContainer>
  );
};

export default Main;
