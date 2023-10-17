/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text , ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import  style  from './style';
import CustomTextInput from '../../components/common/customTextInput';
import CustomButton from '../../components/common/customButton';
import { validateEmail, validatePhoneNumber, validatePassword } from '../../components/common/validations';


const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [error, setError] = useState(null);
    const handleButtonPress = () =>{
        console.warn('pressed');
    };
    const navigation = useNavigation();
//    const handleGoToLogin = () => {
//        navigation.navigate('Login');
//    };

    useEffect( () => {
        GoogleSignin.configure({
            webClientId: '678290547532-ojt6u6nn4td75uk26cqbqoqldlar3km0.apps.googleusercontent.com',
          });
    });
    const handleSignUp = async () => {
        if (username.trim() !== '' && email.trim() !== '' && mobile.trim() !== '' && password.trim() !== '' && cpassword.trim() !== '')
            {if (password.trim() === cpassword.trim()){
                await firestore().collection('Users')
                .where('username','==',username.trim())
                .where('email','==',email.trim()).get().then( async snapshot=>{
                    if (snapshot.empty){
                        if (
                            validateEmail(email) &&
                            validatePhoneNumber(mobile) &&
                            validatePassword(password) &&
                            validatePassword(cpassword)
                          ) {
                                setError(null);
                                const userdata = {
                                    username: username.trim(),
                                    email: email.trim(),
                                    mobilenumber: mobile.trim(),
                                    password: password.trim(),
                                    created: String(new Date()),
                                    updated: String(new Date()),
                                };
                            await firestore().collection('Users').add(userdata).then(resp=>(console.warn(resp))).catch(err=>(console.warn(err)));
                            Snackbar.show({
                            text: 'New user added successfully ',
                            duration: Snackbar.LENGTH_LONG,
                            backgroundColor: 'green',
                            textColor: 'white',
                          });
                          navigation.navigate('Home');
                          }
                          else {
                            if (!validateEmail(email)) {
                                setError('Invalid email, Pls correct it.');
                            }
                            if (!validatePhoneNumber(mobile)) {
                                setError('Invalid mobile number , it must be of 10 digits.');
                            }
                            if (!validatePassword(password)) {
                                setError('Invalid password , password must have at least 8 characters long.');

                            }
                          }
                    }
                    else {
                        Snackbar.show({
                            text: 'Email already exist try another email address',
                            duration: Snackbar.LENGTH_LONG,
                            backgroundColor: 'red',
                            textColor: 'white',
                          });
                    }
                });
            }
            else {setError('passwords do not match');}
            }
        else {setError('Fill up All the empty fields.');}
         };
    return (
        <View style={style.container}>
            <Image
                source={require('../../assets/images/login_back.jpg')}
                style={style.topBg}/>
            <ScrollView style={style.scrollView} showsVerticalScrollIndicator={false}>
            <Image
                source={require('../../assets/images/logo.jpg')}
                style={style.logo}/>
            <Text style={style.loginText}>SignUp Account</Text>
            {error !== null ?
            <View>
                <Text style={style.errorText}>{error}</Text>
            </View> : null}
            <CustomTextInput
             type="username"
             placeholder={'username'}
             handleText={text => setUsername(text)}/>

            <CustomTextInput
             type="email"
             placeholder={'email'}
             handleText={text => setEmail(text)}/>

            <CustomTextInput
            type="phone"
            placeholder={'phone number'}
            handleText={text => setMobile(text)}/>

            <CustomTextInput
            type="password"
            placeholder={'password'}
            handleText={text => setPassword(text)}/>

            <CustomTextInput
            placeholder={'confirm password'}
            type="password"
            handleText={text => setCpassword(text)}/>

            <CustomButton
                type = "primary"
                handleButtonPress= {handleSignUp}
                ButtonText={'SignUp'} />

        </ScrollView>
        <View style={style.dotOuter}>
                <View style={style.dot} />
                    <View>
                        <Text style={style.dotText}>Or Login With</Text>
                    </View>
                <View style={style.dot} />
            </View>

            <CustomButton
                type = "secondary"
                handleButtonPress= {handleButtonPress}
                ButtonText={'Sign In with Google'}
                icon ={require('../../assets/images/google.png')} />
            <Text onPress={handleSignUp} style={style.createText}>
                Goto Login
            </Text>
        </View>
    );
};

export default Signup;
