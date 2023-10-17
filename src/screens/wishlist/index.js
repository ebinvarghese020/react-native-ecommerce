/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text , FlatList, Image } from 'react-native';
import  style  from './style';
import { useNavigation } from '@react-navigation/native';

const Wishlist = () => {
    const products = [
        {
        id: 0,
        name: 'Lemon',
        content: 'Fresh lemons direct from farm',
        price: 10,
        image: require('../../assets/images/hide.png'),
        },
    ];
    return (
        <View style={style.container}>
            <View style={style.one}>
                <FlatList
                    data={products}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({item, index}) => {
                    return (
                    <View
                        style={style.productView}>
                        <View style={style.dlt}>
                            <Image source={require('../../assets/images/email.png')} style={style.dltImg} />
                        </View>
                        <Image
                        source= {item.image}
                        style={style.productImage} />
                        <View style={style.nameView}>
                        <Text style={style.texts}>{item.name}</Text>
                        <Text style={style.textsOne} numberOfLines={2}> {item.content}</Text>

                        <View style={style.des}>
                            <View style={style.des}>

                                <Text style={style.texts}>Rs. {item.price}</Text>
                                <View style={style.offer}>
                                <Text style={style.offerText}>{item.price}%</Text>
                            </View>
                        </View>
                        <View style={style.qunView}>
                            <Text style={style.qunText1}>Add to Cart</Text>
                        </View>
                        </View>
                        </View>
                    </View>
                    );
                    }}
                />
                </View>
            </View>

    );
};

export default Wishlist;
