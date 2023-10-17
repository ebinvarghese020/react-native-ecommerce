/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, Image} from 'react-native';
import style from './style';
import colors from '../colors';

const CustomButton = props =>{
    const {type, ButtonText, handleButtonPress, icon} = props;
    const dynamicStyle = {backgroundColor: type === 'primary' ? colors.primary_green : colors.secondary_green};
    const combinedStyle = {...style.button, ...dynamicStyle};
    return <TouchableOpacity onPress={handleButtonPress} style={combinedStyle}>
        {type === 'primary' ? null : <Image source={icon} style={style.icon}/>}
        <Text
            style={[style.text,
            {color:
                type === 'primary' ? colors.white : colors.black_level_3},
            {fontFamily:
                type === 'primary' ? 'Lato-Bold' : 'Lato-Regular'},
            {fontSize:
            type === 'primary' ? 20 : 14}]}>
            {ButtonText}
        </Text>
    </TouchableOpacity>;
};

export default CustomButton;
