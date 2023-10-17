/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useState, useEffect } from 'react';
import { View, Text , ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


import  style  from './style';
import CustomTextInput from '../../components/common/customTextInput';
import CustomButton from '../../components/common/customButton';
import { validatePhoneNumber } from '../../components/common/validations';

const SignupPhone = () => {
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');

    const [phone , setPhoneNumber] = useState('');
    const [errorr , setError] = useState('');
    const navigation = useNavigation();

    const handleGoToLogin = () => {
        navigation.navigate('Login');
    };

    function onAuthStateChanged(user) {
        if (user) {
        console.log('login successful');
        }
      }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
      }, []);


    const signInWithPhoneNumber = async () => {
        try {
        console.log(phone);
        const confirmation = await auth().signInWithPhoneNumber(phone);
        setConfirm(confirmation);
        }
        catch (err) {
            setError('Invalid mobile number.');
        }
      };
      async function confirmCode() {
        try {
          if (confirm) {
          await confirm.confirm(code);
          console.log('Phone number confirmed.');
          navigation.navigate('Home');
          }
          else {
            console.log('Confirmation object not found.');
          }
        }
        catch (error) {
          console.log('Invalid code.', error);
        }
      }
    return (
        <View style={style.container}>
            <Image
                source={require('../../assets/images/login_back.jpg')}
                style={style.topBg}/>
            <ScrollView style={style.scrollView} showsVerticalScrollIndicator={false}>
            <Image
                source={require('../../assets/images/logo.jpg')}
                style={style.logo}/>
            <Text style={style.loginText}>Login Account</Text>
            {phone ? validatePhoneNumber(phone) ? null : <Text style={{color:'grey'}}> Please registered mobile number (atleast 8 numbers)</Text> : null }
            {errorr ? <Text style={{color:'grey'}}> Please registered mobile number (atleast 8 numbers)</Text> : null }
            <CustomTextInput type="phone" placeholder={'enter phone number'} handleText={text => setPhoneNumber(text)}/>
            <CustomButton
                type = "primary"
                handleButtonPress= {signInWithPhoneNumber}
                ButtonText={'Get OTP'} />

            <CustomTextInput type="phone" placeholder={'enter OTP'} handleText={text => setCode(text)}/>
            <CustomButton
                type = "primary"
                handleButtonPress= {confirmCode}
                ButtonText={'Confirm Code '} />

            <Text onPress={handleGoToLogin} style={style.createText}>
                Goto Login
            </Text>
        </ScrollView>
        </View>
    );
};

export default SignupPhone;
