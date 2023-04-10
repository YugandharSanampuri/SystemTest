import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {HomeData} from '../../API/index'
import {COLOR, FONTS, Loading, showToastMessage} from '../../constants';
import {HeaderWithIcons} from '../reusable_components/Header';

import IonIcons from 'react-native-vector-icons/Ionicons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
 
const HomeScreen = ({navigation}) => {
  const [Data, setData] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    APICall()
      }
      ,[])
const APICall = async() => {
    setloading(true)
    
      HomeData().then(async response => {
          console.log('loginresponse', response);
          setloading(false)
          setData(response.data)
})
  }
  const renderCard = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('CardDetail',{item:item})} style={styles.card} key={index}>
   <View style={styles.logo}>
        <Image resizeMode="contain" source={{uri:item.avatar}} style={{width:"100%",height:"100%"}} />
        </View>  
        <Text style={styles.nametext}>{item.first_name} {item.last_name}</Text>    
        <Text style={styles.emailtext}>{item.email}</Text>    
        </TouchableOpacity>
    );
  };
  return (
    loading?<Loading/>:
    <View style={{flex:1,backgroundColor:COLOR.white}}>
      
      <HeaderWithIcons
          heading="Home Screen"      
          IconTwo={
            <IonIcons
              name="ios-menu-outline"
              size={30}
              color={'rgb(178, 190, 181)'}
            />
          }       
          onBackIconPress={()=>navigation.goBack()}
          onIconTwoPress={() => navigation.openDrawer()}
        />

    <FlatList 
    
    keyExtractor={(item, index) => index.toString()}
    showsHorizontalScrollIndicator={false}
    data={Data}
    renderItem={renderCard}
  />
</View>
  );
};

export default HomeScreen;

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
