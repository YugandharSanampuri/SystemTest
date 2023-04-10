import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IMAGES from '../assets/images';
import {FONTS, COLOR} from '../constants';
import TabNavigation from './TabNavigation';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
const Drawer = createDrawerNavigator();

const CustomDrawerComponent = ({navigation, AuthAccessInApp}) => (

  <View style={styles.container}>
    <View style={styles.profileInfoContainer}>
      <Image source={IMAGES.profile} style={styles.profileImg} />
      <View style={styles.profileNameContainer}>
        <Text style={styles.profileNameText}>Albert Joseph Martin</Text>
        <Text style={styles.profileDesignationText}>Pestcontrol service</Text>
      </View>
      <Pressable
        onPress={() => navigation.closeDrawer()}
        style={styles.closeDrawerContainer}>
        <IonIcons name="arrow-back" color={COLOR.black} size={25} />
      </Pressable>
    </View>
    <View style={styles.profileInfoDivider} />
    <Pressable
      style={styles.drawerItemContainer}
      onPress={() => navigation.navigate('Screen1')}>
      <IonIcons name="ios-person-outline" color={COLOR.iconColor} size={20} />
      <Text style={styles.drawerItemText}>Page1</Text>
    </Pressable>
    <Pressable
      style={styles.drawerItemContainer}
      onPress={() => navigation.navigate('Screen2')}>
      <IonIcons name="ios-person-outline" color={COLOR.iconColor} size={20} />
      <Text style={styles.drawerItemText}>Page2</Text>
    </Pressable>
    <Pressable
      style={styles.drawerItemContainer}
      onPress={() => navigation.navigate('Screen3')}>
      <IonIcons name="ios-person-outline" color={COLOR.iconColor} size={20} />
      <Text style={styles.drawerItemText}>Page3</Text>
    </Pressable>
  
    <Pressable
      style={styles.drawerItemContainer}
      onPress={async() => {
        AuthAccessInApp(false)
        await AsyncStorage.clear()
      }}>
      <AntDesign name="logout" color={COLOR.iconColor} size={20} />
      <Text style={styles.drawerItemText}>Logout</Text>
    </Pressable>
    <View style={styles.profileInfoDivider} />
    <Image source={IMAGES.logo} style={styles.logo} />
  </View>
);

const DrawerNavigation = () => {
  const AuthAccessInApp = useSelector(state => state?.authReducer?.token_func);
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false,}}
      drawerContent={({navigation}) => (
        <CustomDrawerComponent
          navigation={navigation}
          AuthAccessInApp={AuthAccessInApp}
        />
      )}>
      <Drawer.Screen name="HomeScreen" headerShown={false} component={TabNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLOR.white},
  profileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  profileImg: {resizeMode: 'contain', width: 90, height: 90},
  profileNameContainer: {
    marginHorizontal: 10,
  },
  profileNameText: {
    fontFamily: FONTS.Roboto_Medium,
    color: COLOR.black,
    fontWeight: 'bold',
    fontSize: 13,
  },
  profileDesignationText: {
    fontFamily: FONTS.Roboto_Light,
    color: COLOR.profileTextColor,
    fontSize: 11,
  },
  closeDrawerContainer: {
    alignSelf: 'flex-start',
    position: 'relative',
    top: -20,
    right: 20,
  },
  profileInfoDivider: {
    width: '90%',
    height: 1,
    backgroundColor: COLOR.dividerColor,
    alignSelf: 'center',
  },
  drawerItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  drawerItemText: {
    marginHorizontal: 10,
    fontFamily: FONTS.Roboto_Regular,
    fontSize: 14,
    color: COLOR.notificationTextColor,
  },
  logo: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
