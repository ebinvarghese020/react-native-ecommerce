/* eslint-disable prettier/prettier */

import React from 'react';
import { View, TouchableOpacity, Image, TextInput, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import colors from '../colors';

const CustomSearch = (props) => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
        <View style={style.search}>
            <View style={style.innerView}>
                <Image source={require('../../../assets/images/search.png')} style={style.searchIcon} />
                <TextInput
                    placeholder ="Search Here"
                    placeholderTextColor={colors.black_level_2}
                    style={style.textInput}
                    selectionColor={colors.primary_green}/>
            </View>
                {props.text ? null : <Image
                    source={require('../../../assets/images/mic.png')}
                    style={style.searchIcon} />}
                    {props.text ? <View><Text style={style.filter}>{props.text}</Text></View> : null }

        </View>
    </View>
  );
};

export default CustomSearch;
