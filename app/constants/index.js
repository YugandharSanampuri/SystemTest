import COLOR from './colors';
import FONTS from './fonts';
import Spinner from 'react-native-loading-spinner-overlay';
import React from 'react';

import {showToastMessage, ValidationRegex, height, width} from './utils';
export const Loading = () => {
    return <Spinner size="large" visible={true} />;
  };
export {COLOR, FONTS, showToastMessage, ValidationRegex, height, width};
