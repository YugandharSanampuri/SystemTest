import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {HomeData} from '../../API/index'
import {COLOR, FONTS, Loading, showToastMessage} from '../../constants';
import {HeaderWithIcons} from '../reusable_components/Header';
import {setdata} from '../../redux/actions/AuthAction'
import {useDispatch, useSelector} from 'react-redux';

import IonIcons from 'react-native-vector-icons/Ionicons';
 
const HomeScreen = ({navigation}) => {
  const [loading, setloading] = useState(false);
  const [Search, setsearch] = useState('');

  const [loadingfooter, setloadingfooter] = useState(false);
  const dispatch=useDispatch()
  const data = useSelector(state => state?.authReducer?.data);

  const [URL, setURL] = useState(null);

  useEffect(() => {
    //APICall(Search,URL)
      }
      ,[])
      const GetDataPagination=async()=>{
        setloadingfooter(true);
        HomeData(Search,URL).then(async response => {
          console.log('loginresponse', response);
          setloadingfooter(false)
          let combine=[...response.results,...data]
          dispatch(setdata(combine))

          setURL(response.next)
})
      }
const APICall = async(val) => {
    setloading(true)
    
      HomeData(val,null).then(async response => {
          console.log('loginresponse', response);
          setloading(false)
          dispatch(setdata(response.results))
          setURL(response.next)
})
  }
  const renderCard = ({ item, index }) => {
    return (
      <TouchableOpacity  style={styles.card} key={index}>
   
        <Text style={styles.nametext}>Name : {item.name}</Text>    
        <Text style={styles.emailtext}>Population : {item.population}</Text>    
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
 <View style={styles.textInputContainer}>
        <Feather
          name="user"
          color={COLOR.iconColor}
          size={25}
          style={styles.iconStyle}
        />
        <TextInput
          style={styles.textInputStyles}
          keyboardType='default'
          placeholder="Search planet"
          placeholderTextColor={COLOR.textInputTextColor}
          returnKeyType="done"
          value={Search}
          onChangeText={value => {setsearch(value),APICall(value,URL)}}
        />
      </View>

    <FlatList 
    onRefresh={() => 
                      URL===null?null:GetDataPagination()
    }
    refreshing={loadingfooter}

    keyExtractor={(item, index) => index.toString()}
    showsHorizontalScrollIndicator={false}
    style={{flex: 1}}
            onEndReachedThreshold={0.01}
            scrollEventThrottle={150}
            // ListFooterComponent={() => {
            //   if (loadingfooter) {
            //     return (
            //       <View style={{height:40}}>
            //         <ActivityIndicator size="large" color="#0000ff" />
            //       </View>
            //     );
            //   } else {
            //     return null
            //   }
            // }}
              // onEndReached={()=>{
              //   URL===null?null:GetDataPagination()
              //                 }}
    data={data}
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
  card:{padding:10,borderWidth:1,margin:10,borderRadius:10}
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
  textInputStyles: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: COLOR.white,
    color: COLOR.textInputTextColor,
    borderRadius: 5,
    fontFamily: FONTS.Roboto_Light,
    fontSize: 12,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    elevation:6,
    alignItems: 'center',
    backgroundColor: COLOR.white,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  iconStyle: {
    padding: 10,
  },
});
