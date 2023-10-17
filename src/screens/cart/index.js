/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import  style  from './style';
import CommonButton from '../../components/common/commonButtons';

const Cart = () => {
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
                        <Image
                        source= {item.image}
                        style={style.productImage} />
                        <View style={style.nameView}>
                        <Text style={style.texts}>{item.name}</Text>
                        <Text style={style.textsOne} numberOfLines={2}> {item.content}</Text>

                        <View style={style.des}>
                            <View style={style.des}>

                                <Text style={style.texts}>{item.price}</Text>
                                <View style={style.offer}>
                                <Text style={style.offerText}>{item.price}%</Text>
                            </View>
                        </View>
                        <View style={style.qunView}>
                            <Text style={style.qunText1}>-</Text>
                            <Text style={style.qunText2}>0</Text>
                            <Text style={style.qunText1}>+</Text>
                        </View>
                        </View>
                        </View>
                    </View>
                    );
                    }}
                />
                <View style={style.offerOne}>
                    <View style={style.OfferLeft}>
                            <Text style={style.LeftOne}>50</Text>
                            <View>
                                <Text style={style.LeftTwo}>%</Text>
                                <Text style={style.LeftTwo}>OFF</Text>
                            </View>
                    </View>
                    <View style={style.Center}>
                            <Text style={style.COne}>On your First Order</Text>
                            <Text style={style.CTwo}>For order above 2500 Rs.</Text>
                    </View>
                    <View style={style.Right}>
                            <Text style={style.ROne}>Use Code</Text>
                            <Text style={style.RTwo}>s4x2</Text>
                    </View>
                </View>
                <View>
                    <Text style={style.billTopic}>Order Details</Text>
                </View >
                <View style={style.bill}>
                    <View >
                        <Text style={style.bLeft}>Bag Total</Text>
                        <Text style={style.bLeft}>Bag Savings</Text>
                        <Text style={style.bLeft}>Coupon Discount</Text>
                        <Text style={style.bLeft}>Delivery</Text>
                    </View>
                    <View>
                        <Text style={style.bLeft}>Rs. 0.00</Text>
                        <Text style={{...style.bLeft, color: 'green'}}>Rs. 0.00</Text>
                        <Text style={{...style.bLeft, color: 'red'}}>Rs. 0.00</Text>
                        <Text style={style.bLeft}>Rs. 0.00</Text>
                    </View>
                </View>
                <View style={style.billLast}>
                        <Text style={style.billTopic}>Total</Text>
                        <Text style={style.billTopic}>Rs. 0.00</Text>
                    </View>

                < CommonButton text={'Proceed To Checkout'}/>

            </View>
        </View>
    );
};

export default Cart;
