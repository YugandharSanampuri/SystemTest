import * as React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLOR, FONTS} from '../constants';
import HomeScreen from '../components/main_screens/HomeScreen';
import CardDetail from '../components/main_screens/CardDetail';
import Screen1 from '../components/main_screens/Screen1';
import Screen2 from '../components/main_screens/Screen2';
import Screen3 from '../components/main_screens/Screen3';

const HomeStack = createNativeStackNavigator();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator screenOptions={{   headerBackVisible:true,headerShown:false   }}>
      <HomeStack.Screen name="Home Screen" component={HomeScreen} />
      <HomeStack.Screen name="CardDetail"headerShown={false} component={CardDetail} />
      <HomeStack.Screen name="Screen1" component={Screen1} />
      <HomeStack.Screen name="Screen2"headerShown={false} component={Screen2} />
      <HomeStack.Screen name="Screen3"headerShown={false} component={Screen3} />

         </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const ICON_SIZE = 20;
const TabBarComponent = ({navigation, state}) => {
  return (
    <LinearGradient 
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.tabBarContainer}
      colors={['#000836', '#000836', '#000836']}>
      <Pressable
        style={styles.tabBarIconContainer}
        onPress={() => navigation.navigate('Home Screen')}>
        <SimpleLineIcons name="home" size={ICON_SIZE} color={COLOR.white} />
        <Text style={styles.tabBarText}>Home</Text>
      </Pressable>
     
      <Pressable
        style={styles.tabBarIconContainer}
        onPress={() => navigation.navigate('Screen1')}>
        <MaterialCommunityIcons
          name="face-profile"
          size={ICON_SIZE}
          color={COLOR.white}
        />
        <Text style={styles.tabBarText}>Screen1</Text>
      </Pressable> 
        <Pressable
        style={styles.tabBarIconContainer}
        onPress={() => navigation.navigate('Screen2')}>
        <MaterialCommunityIcons
          name="face-profile"
          size={ICON_SIZE}
          color={COLOR.white}
        />
        <Text style={styles.tabBarText}>Screen2</Text>
      </Pressable>
      <Pressable
        style={styles.tabBarIconContainer}
        onPress={() => navigation.navigate('Screen3')}>
        <MaterialCommunityIcons
          name="face-profile"
          size={ICON_SIZE}
          color={COLOR.white}
        />
        <Text style={styles.tabBarText}>Screen3</Text>
      </Pressable>
    </LinearGradient>
  );
};
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false,   headerBackVisible:false,        tabBarHideOnKeyboard: true}}
      tabBar={props => <TabBarComponent {...props} />}>
      <Tab.Screen name="HomeScreenStack"headerShown={false} component={HomeScreenStack} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
const styles = StyleSheet.create({
  tabBarContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  tabBarIconContainer: {
    alignItems: 'center',
  },
  tabBarText: {
    color: COLOR.white,
    fontFamily: FONTS.Roboto_Medium,
    fontSize: 10,
    marginVertical: 5,
  },
  tabBarIcon: {width: 20, height: 20, resizeMode: 'contain'},
});
