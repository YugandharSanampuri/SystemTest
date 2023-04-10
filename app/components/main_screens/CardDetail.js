import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {HeaderWithIcons} from '../reusable_components/Header';

import {COLOR, FONTS,} from '../../constants';

import IonIcons from 'react-native-vector-icons/Ionicons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CardDetail = (props) => {
const item=props.route.params.item

 
  return (
  
    <View style={{flex:1,backgroundColor:COLOR.white}}>
          <HeaderWithIcons
          heading="Detail Screen"
          IconTwo={
            <IonIcons
              name="ios-menu-outline"
              size={30}
              color={'rgb(178, 190, 181)'}
            />
          }
          IconThree={
            <AntDesign
              name="arrowleft"
              size={30}
              color={'rgb(178, 190, 181)'}
            />
          }
          onBackIconPress={()=>props.navigation.goBack()}
          onIconTwoPress={() => props.navigation.openDrawer()}
        />
   
 <View style={styles.logo}>
        <Image resizeMode="contain" source={{uri:item.avatar}} style={{width:"100%",height:"100%"}} />
        </View>  
        <Text style={styles.nametext}>{item.first_name} {item.last_name}</Text>    
        <Text style={styles.emailtext}>{item.email}</Text> 
           </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLOR.white},
  logo: {
    width: 300,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  card:{padding:10}
  ,
  emailtext: {
    color: COLOR.black,
    fontSize: 16,
    alignSelf: 'center',
    
    fontWeight:"bold",
    textAlign:'center',
lineHeight:21  },
  nametext: {
    color: COLOR.black,
    fontSize: 18,
    fontFamily: FONTS.Roboto_Bold,
    alignSelf: 'center',
    lineHeight: 25,
  },
});
