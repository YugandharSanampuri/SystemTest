import React  from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {COLOR, FONTS,height} from '../../constants';
import {HeaderWithIcons} from '../reusable_components/Header';

import IonIcons from 'react-native-vector-icons/Ionicons';
 
const Page3 = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:COLOR.white}}>
      
      <HeaderWithIcons
          heading="Screen3"      
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
<View style={{top:height/3 }}>
        <Text style={styles.nametext}>Welcome to page3</Text>
        </View>   
         </View>
  );
};

export default Page3;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLOR.white},
  nametext: {
    color: COLOR.black,
    fontSize: 18,
    fontFamily: FONTS.Roboto_Bold,
    alignSelf: 'center',
    lineHeight: 25,
  },
});
