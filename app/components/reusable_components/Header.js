import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {COLOR} from '../../constants';
import { useNavigation } from '@react-navigation/native';

const emptyFunction = () => {
  // showToastMessage('empty function called');
  console.log('empty function called');
};
const Header = ({
  showIconButton = false,
  heading,
  onPressIconButton = emptyFunction(),
  onBackIconPress = emptyFunction(),
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameAndIconContainer}>
        <Pressable onPress={onBackIconPress}>
          <EntypoIcons
            name="chevron-thin-left"
            size={25}
            color={COLOR.black}
            style={styles.iconStyles}
          />
        </Pressable>
        <Text style={styles.headingTextStyle}>{heading}</Text>
      </View>
      {showIconButton ? (
        <Pressable
          style={styles.iconButtonContainer}
          onPress={onPressIconButton}>
          <EvilIcons
            name="plus"
            size={30}
            color={COLOR.textPrimaryColor}
            style={styles.iconStyles}
          />
        </Pressable>
      ) : (
        <View />
      )}
    </View>
  );
};
const HeaderWithIcons = ({
  heading,
  backMenuIcon,
  IconOne = <View />,
  IconTwo = <View />,
  IconThree = <View />,
  onBackIconPress =  emptyFunction(),
  onIconOnePress = emptyFunction(),
  onIconTwoPress = emptyFunction(),
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.nameAndIconContainer}>
      {IconThree? (
          <Pressable
            style={styles.iconButtonContainer}
            onPress={onBackIconPress}>
            {IconThree}
          </Pressable>
        ) : (
          <View />
        )}
        <Text style={styles.headingTextStyle}>{heading}</Text>
      </View>
      <View style={styles.iconsContainer}>
      
        {IconOne ? (
          <Pressable
            style={styles.iconButtonContainer}
            onPress={onIconOnePress}>
            {IconOne}
          </Pressable>
        ) : (
          <View />
        )}
        {IconTwo ? (
          <Pressable
            style={styles.iconButtonContainer}
            onPress={onIconTwoPress}>
            {IconTwo}
          </Pressable>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export {Header, HeaderWithIcons};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: COLOR.white,
    elevation: Platform.OS === 'ios' ? 10 : 5,
    shadowColor: '#555',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  nameAndIconContainer: {flexDirection: 'row', alignItems: 'center'},
  iconStyles: {padding: 10},
  headingTextStyle: {
    // fontFamily: '#290478',
    fontSize: 14,
    left:25,
    color: COLOR.black,
  },
  iconButtonContainer: {
    marginHorizontal: 10,
  },
  iconsContainer: {
    // backgroundColor:'red'
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
