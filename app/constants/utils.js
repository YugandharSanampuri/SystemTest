import React from 'react';
import Toast from 'react-native-simple-toast';
import { Dimensions, ToastAndroid, Platform, PixelRatio } from "react-native";
export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;

 const {height, width} = Dimensions.get('screen');
// const showToastMessage = (text, duration = 2000) => {
//   return Toast.show(text, duration);
// };
export const normalize = (size) => {
  const scale = screenWidth / 375;
  const newSize = size * scale;
  if (Platform.OS == 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  }
  else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const showToastMessage = (msg, duration = 1000) => {
       if (Platform.OS === 'ios')
        return Toast.showWithGravity(msg, Toast.LONG, Toast.BOTTOM);
      else return Toast.show(msg, duration);
  };

const ValidationRegex = {
  emailRegex:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
export {showToastMessage, ValidationRegex, height, width};
