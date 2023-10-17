/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text , ScrollView, Image } from 'react-native';
import Snackbar from 'react-native-snackbar';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import  stylee  from './style';
import CustomTextInput from '../../components/common/customTextInput';
import CustomButton from '../../components/common/customButton';
import {useNavigation} from '@react-navigation/native';
import { useDimensionContext } from '../../components/context';
import { useDispatch } from 'react-redux';
import { login } from '../../storage/actions';


const Login = () => {
    const dispatch = useDispatch();
    const dimensions = useDimensionContext();
    const style = stylee(dimensions.windowWidth, dimensions.windowHeight);
    const [useer , setUser] = useState('');
    const [email , setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleButtonPress = () =>{
        console.warn('pressed');
    };
    const navigation =  useNavigation();
    const handleGoToSignup = () => {
        navigation.navigate('Signup');
    };
    const handleGoToSignupPhone = () => {
        navigation.navigate('SignupPhone');
    };
    function onAuthStateChanged() {
      setUser(useer);
      console.log(useer);
    }
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
        });
    const handleSignIn = async () => {
        if (email.trim() === '' || password.trim() === '') {
            Snackbar.show({
              text: 'Fill up all the fields',
              duration: Snackbar.LENGTH_LONG,
              backgroundColor: 'red',
              textColor: 'white',
            });
          } else {
            await firestore()
              .collection('Users')
              .where('email', '==', email.trim().toLowerCase())
              .get()
              .then(async (snapshot) => {
                if (snapshot.empty) {
                  Snackbar.show({
                    text: 'This user is not registered. Please try after creating a new account.',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: 'red',
                    textColor: 'white',
                  });
                } else {
                  snapshot.forEach(documentSnapshot => {
                  const uid = documentSnapshot.id;
                  const user = documentSnapshot.data();
                  if (user.password.trim() === password.trim()) {
                    console.warn(user);
                    dispatch( login({
                      userId: uid,
                      firstName: user.firstName,
                      lastName: user.lastName,
                      email: user.email,
                      mobileNo: user.mobilenumber,
                      profileImage: user.pimage,
                    }));
                    console.warn(user.pimage);
                    Snackbar.show({
                      userId: documentSnapshot.id,
                      text: 'Login successful.',
                      duration: Snackbar.LENGTH_LONG,
                      backgroundColor: 'green',
                      textColor: 'white',
                    });
                    navigation.navigate('Home');
                  } else {
                    Snackbar.show({
                      text: 'Incorrect password. Please check your password and try again.',
                      duration: Snackbar.LENGTH_LONG,
                      backgroundColor: 'red',
                      textColor: 'white',
                    });
                  }
                });
                }
              })
              .catch((err) => console.warn(err));
          }
    };
    return (
        <View style={style.container}>
            <Image
                source={require('../../assets/images/login_back.jpg')}
                style={style.topBg}/>
            <ScrollView style={style.scrollView} showsVerticalScrollIndicator={false} >
            <Image
                source={require('../../assets/images/logo.jpg')}
                style={style.logo}/>
            <Text style={style.loginText}>Login Account</Text>
            <CustomTextInput type="email" placeholder={'email'} handleText={text => setUsername(text)}/>
            <CustomTextInput type="password" placeholder={'password'} handleText={text => setPassword(text)}/>
            <CustomButton
                type = "primary"
                handleButtonPress= {handleSignIn}
                ButtonText={'Sign In'} />

            <Text onPress={handleGoToSignup} style={style.createText}>
                If you are new, Create Account Here.
            </Text>

            <View style={style.dotOuter}>
                <View style={style.dot} />
                    <View>
                        <Text style={style.dotText}>Or Login With</Text>
                    </View>
                <View style={style.dot} />
            </View>

            <CustomButton
                handleButtonPress ={handleGoToSignupPhone}
                type = "secondary"
                ButtonText={'Sign In with Phone'}
                icon ={require('../../assets/images/smartphone.png')} />

            <CustomButton
                type = "secondary"
                handleButtonPress= {handleButtonPress}
                ButtonText={'Sign In with Google'}
                icon ={require('../../assets/images/google.png')} />
            </ScrollView>
            <View style={style.footer}>
                <Text style={style.footertext}>
                    Login as Guest
                </Text>
            </View>
        </View>
    );
};

export default Login;
