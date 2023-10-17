/* eslint-disable prettier/prettier */
import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import style from './style';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const Banner = () => {
    const [bannerItems, setBannerItems] = useState([]);
    useEffect(() =>{
        getBanners();
    },[]);
    const getBanners = async() =>{
        await firestore()
        .collection('Banners')
        .get()
        .then( snapshot => {
            if ( !snapshot.empty ) {
                const result = [];
                snapshot.docs.forEach(doc => {
                    if ( doc.exists){
                        result.push(doc.data());
                    }
                });
                setBannerItems(result);
            }
        })
        .catch( err =>{
            console.log( 'ERROR ', err);
        });
    };
    return (
        <View>
        <FlatList
            data={bannerItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={({item, index}) => String(index)}
            renderItem={({item, index}) =>{
                return (
                    <ImageBackground source={{uri: item.image}} style={style.banner}>
                        <View style={style.innerView}>
                            <Text style={style.head}>{item.head}</Text>
                            <Text style={style.content}>{item.description}</Text>
                            <TouchableOpacity style={style.touch}>
                                <Text style={style.touchText}>Shop Now</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                );
            }}/>
            </View>
    );
};

export default Banner;
