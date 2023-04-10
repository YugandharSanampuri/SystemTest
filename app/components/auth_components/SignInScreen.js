import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLOR, FONTS, Loading, showToastMessage, ValidationRegex} from '../../constants';
import IMAGES from '../../assets/images';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
 
const SignInScreen = ({navigation}) => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setloading] = useState(false);
const dispatch=useDispatch()
  const emailRef = useRef();
  const passwordRef = useRef();

  const AuthAccessInApp = useSelector(state => state?.authReducer?.token_func);
  const validateSignInForm = () => {
    let isValid = true;

    if (emailAddress == '') {
      showToastMessage('please enter your email address');
      isValid = false;
      return isValid;
    }
    if (!emailAddress.match(ValidationRegex.emailRegex)) {
      showToastMessage('please enter a valid email address');
      isValid = false;
      return isValid;
    }
    if (password == '') {
      showToastMessage('please enter password');
      isValid = false;
      return isValid;
    }

    return isValid;
  };

  const onSignInButtonPress = async() => {
    if (validateSignInForm()) {
   
          showToastMessage('Sign In Successful!');
          //dispatch(setTokenFunction(response))
          await AsyncStorage.setItem('Userdata','response')
          AuthAccessInApp(true);
        
        
    }
  };
  return (
    loading?<Loading/>:
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
       {/* <ImageBackground  source={IMAGES.bgshape} style={{flex:1}} > */}
       <View style={styles.logo}>
        <Image resizeMode="contain" source={IMAGES.logo} style={{width:"100%",height:"100%"}} />
        </View>
      <Text style={styles.headingText}>Sign In</Text>
      <View style={styles.textInputContainer}>
        <FontistoIcons
          name="email"
          color={COLOR.iconColor}
          size={25}
          style={styles.iconStyle}
        />
        <TextInput
          ref={emailRef}
          style={styles.textInputStyles}
          keyboardType="email-address"
          placeholder="Enter Email Address"
          placeholderTextColor={COLOR.textInputTextColor}
          returnKeyType="done"
          value={emailAddress}
          onSubmitEditing={() => passwordRef.current.focus()}
          onChangeText={emailValue => setEmailAddress(emailValue)}
        />
      </View>

      <View style={styles.textInputContainer}>
        <IonIcons
          name="ios-lock-closed-outline"
          color={COLOR.iconColor}
          size={25}
          style={styles.iconStyle}
        />
        <TextInput
          ref={passwordRef}
          style={styles.textInputStyles}
          placeholder="Password"
          placeholderTextColor={COLOR.textInputTextColor}
          returnKeyType="done"
          value={password}
          secureTextEntry={showPassword}
          onChangeText={passwordValue => setPassword(passwordValue)}
        />
        <Pressable
          onPress={() => {
            setShowPassword(!showPassword);
          }}>
          <IonIcons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            color={COLOR.iconColor}
            size={25}
            style={styles.iconStyle}
          />
        </Pressable>
      </View>
      <Pressable
        onPress={() => navigation.navigate('Forgot Password')}
        style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </Pressable>
      <Pressable
        style={styles.buttonStyles}
        onPress={() => onSignInButtonPress()}>
        <LinearGradient
          style={{borderRadius: 30, paddingVertical: 15}}
          colors={[COLOR.gradientButtonColorOne, COLOR.gradientButtonColorTwo]}>
          <Text style={styles.buttonTextStyles}>Sign In</Text>
        </LinearGradient>
      </Pressable>
      <View style={styles.SignUpTextContainer}>
        <Text style={styles.dontHaveText}>Don't have account? </Text>
        <Pressable onPress={() => navigation.navigate('signup_screen')}>
          <Text style={styles.createNewText}>Create New</Text>
        </Pressable>
      </View>
      {/* </ImageBackground> */}

    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLOR.white},
  logo: {
    width: 300,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  headingText1: {
    color: COLOR.black,
    fontSize: 16,
    alignSelf: 'center',
    width:320,
    
    fontWeight:"bold",
    textAlign:'center',
    marginVertical: 60,
  },
  headingText: {
    color: COLOR.black,
    fontSize: 18,
    fontFamily: FONTS.Roboto_Bold,
    alignSelf: 'center',
    marginBottom: 20,
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
  forgotPasswordContainer: {
    marginHorizontal: 30,
  },
  forgotPasswordText: {
    color: COLOR.textPrimaryColorTwo,
    fontFamily: FONTS.Roboto_Medium,
    fontSize: 14,
  },
  buttonStyles: {
    marginTop: 50,
    marginHorizontal: 100,
    marginVertical: 10,
  },
  buttonTextStyles: {
    textAlign: 'center',
    color: COLOR.white,
    fontSize: 15,
    fontFamily: FONTS.Roboto_Medium,
  },
  iconStyle: {
    padding: 10,
  },
  dontHaveText: {
    color: COLOR.black,
    fontFamily: FONTS.Roboto_Medium,
    fontSize: 13,
  },
  createNewText: {
    color: COLOR.textPrimaryColorTwo,
    fontFamily: FONTS.Roboto_Medium,
    fontSize: 13,
  },
  SignUpTextContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
});
