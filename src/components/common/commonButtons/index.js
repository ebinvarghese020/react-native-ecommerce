/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

const CommonButton = (props) => {
    return (
        <View style={style.container}>
            <Text style={style.text}>{props.text}</Text>
        </View>
    );
};

export default CommonButton;
