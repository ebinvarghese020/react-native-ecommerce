/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView } from 'react-native';
import  style  from './style';
import CustomSearch from '../../components/common/customSearch';
import OfferProducts from '../../components/common/offerProducts';

const Offers = () => {
    return (
        <View style={style.main}>
            <ScrollView
                style={style.container}
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}>
                <CustomSearch />
                <OfferProducts/>
            </ScrollView>
        </View>
    );
};

export default Offers;
