import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../components/auth_components/SignInScreen';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
          <AuthStack.Screen
        options={{headerShown: false}}
        name="signin_screen"
        component={SignInScreen}
      />
   
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
