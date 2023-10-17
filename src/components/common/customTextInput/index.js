/* eslint-disable prettier/prettier */
import {TextInput, View, Image, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import style from './style';
import colors from '../colors';

const CustomTextInput = props => {
    const [show, setShow] = useState(false);
    const {placeholder ,type, handleText, value} = props;
    const keyboardType = type === 'email' ? 'email-address' : type === 'phone' ? 'phone-pad' : 'default';
    const secureText = type === 'password' ? (show ? false : true) : false;
    const icon = type === 'email'
    ? require('../../../assets/images/email.png')
    : type === 'password'
    ? show
    ? require('../../../assets/images/view.png')
    : require('../../../assets/images/hide.png')
    : false;
    const handlePassword = () =>{
        setShow(!show);
    };
  return (
    <View style={style.container}>
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            placeholderTextColor="grey"
            secureTextEntry={secureText}
            style={style.textEntry}
            selectionColor={colors.primary_green}
            onChangeText={handleText}
            value={value}
        />
        { icon ? (
        <TouchableOpacity onPress={handlePassword} disabled={type !== 'password' ? true : false }>
        <Image style={style.icon} source={icon}/>
        </TouchableOpacity>) : null}
    </View>

    );
};

export default CustomTextInput;
