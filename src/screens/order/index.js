/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text , ScrollView, Image } from 'react-native';
import  style  from './style';
import CustomSearch from '../../components/common/customSearch';

const Order = () => {
    return (
        <View >
            <CustomSearch text="Filter" />
            <View style={style.container}>
            <View style={style.containerInner}>
                <View>
                    <Text style={style.textID}>ID: #ASW234</Text>
                    <Text style={style.Green}>ID: #ASW234</Text>
                    <Text style={style.textRest}>ID: #ASW234</Text>
                    <Text  style={style.textRest}>ID: #ASW234</Text>
                    <Text  style={style.textOrder}>ID: #ASW234</Text>
                </View>
                <View>
                    <Image source={require('../../assets/images/bg2.jpg')} style={style.image} />
                </View>
            </View>
            <View style={style.innerOne}>
                    <Text  style={style.textOrder}>Order Shipped</Text>
                    <Text  style={style.textOrder}>Rate & Review</Text>
            </View>
            </View>
        </View>
    );
};

export default Order;
