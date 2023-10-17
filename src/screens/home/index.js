/* eslint-disable prettier/prettier */
import React from 'react';
import {  ScrollView, Text, View } from 'react-native';
import CommonHeader from '../../components/common/customHeader';

import  style  from './style';
import CustomSearch from '../../components/common/customSearch';
import Banner from '../../components/banner';
import RecentBought from './components/recentBought';
import ShopCategory from './components/shopCategory';
import ProductScroll from '../../components/productsScroll';
import OfferProducts from '../../components/common/offerProducts';

const Home = () => {
    return (
        <View style={style.main}>
        <CommonHeader/>
        <ScrollView
        style={style.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>

            <CustomSearch/>
            <Banner/>
            <RecentBought/>
            <ShopCategory/>
            <ProductScroll/>
            <OfferProducts/>

            <Text style={style.footText}>Didn't find what you are looking for?</Text>
            <View style={style.footButton}>
                <Text style={style.footButtonText}>Browse Category</Text>
            </View>
        </ScrollView>
        </View>
    );
};

export default Home;
