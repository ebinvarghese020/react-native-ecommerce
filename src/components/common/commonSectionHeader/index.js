/* eslint-disable prettier/prettier */
import React from 'react';
import {  Text, View, TouchableOpacity } from 'react-native';
import  style  from './style';


const CommonSectionHeader = (props) => {
    return (
            <View style={style.headView}>
                <View>
                    <Text style={style.headText}>{props.head}</Text>
                    <Text style={style.contentText}>{props.content}</Text>
                </View>
                <TouchableOpacity onPress={props.handlePress}>
                <Text style={style.seeAll} >{props.rightText}</Text>
                </TouchableOpacity>
            </View>
    );
};

export default CommonSectionHeader;
