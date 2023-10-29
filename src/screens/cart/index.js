/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useCallback} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import  style  from './style';
import CommonButton from '../../components/common/commonButtons';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';


const Cart = () => {
    const [products, setProducts] = useState([]);
    const {userId} = useSelector(state => state);
    
    const GetCart = async () => {
        try {
            const snapshot = await firestore()
                .collection('Cart')
                .get();

            if (!snapshot.empty) {
                const results = [];
                snapshot.docs.forEach(doc => {
                    if (doc.exists) {
                        const responseData = { id: doc.id, ...doc?.data() };
                        results.push(responseData);
                    }
                });
                setProducts(results);
            }
        } catch (error) {
            console.warn(error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            GetCart()
        }, [])
    );

    return (
        <View style={style.container}>
            <ScrollView>
            <View style={style.one}>
                <FlatList
                    data={products}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({item, index}) => (
                    <RenderItem item={item} index={index} callReload={GetCart}/>
                    )}
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
            </ScrollView>
        </View>
    );
};

const RenderItem = ({item, index, callReload}) => {
    const [qty, setQty] = useState(0);
    const {userId} = useSelector(state => state);
    console.warn(item)
    const AddToCart = async item => {
        await firestore()
              .collection('Cart')
              .where('userId', '==', userId)
              .where('productId', '==', item.id)
              .get()
              .then(snapshot => {
                if (snapshot.empty){
                    firestore()
                    .collection('Cart')
                    .add({
                        created: Date.now(),
                        description: item.description,
                        name: item.name,
                        price: item.price,
                        quantity: 1,
                        userId: userId,
                        productId: item.id,
                        image: item.image,
                    });
                } else {
                    firestore()
                    .collection('Cart')
                    .doc(snapshot?.docs[0].id)
                    .update({
                        quantity: parseInt(snapshot?.docs[0].data().quantity, 10) + 1,
                    });
                }
              });
    };
    const removeItem = async () => {
        if (qty <= 1) {
            await firestore().collection('Cart').doc(item.id).delete().then(() => {callReload})
        }
        else {
            setQty(qty - 1);
            firestore().collection('Cart').doc(item.id).update({
                quantity: parseInt(item.quantity, 10) - 1,
            })
        }
    }
    return (
        <View
            style={style.productView}>
            <Image
            source= {{uri : item.image}}
            style={style.productImage} />
            <View style={style.nameView}>
            <Text style={style.texts}>{item.name}</Text>
            <Text style={style.textsOne}> {item.description}</Text>
            <View style={style.des}>
                <View style={style.des}>

                    <Text style={style.texts}>Rs. {item.price}</Text>
                    <View style={style.offer}>
                    <Text style={style.offerText}>{item.price}%</Text>
                </View>
            </View>
            <View style={style.qunView}>
                <TouchableOpacity onPress={removeItem}>
                    <Text style={style.qunText1} >-</Text>
                </TouchableOpacity>
                    <Text style={style.qunText2}>{qty}</Text>

                <TouchableOpacity onPress={() => {setQty(qty + 1)
                                                        AddToCart(item)}}>
                    <Text style={style.qunText1}>+</Text>
                </TouchableOpacity>
            </View>
            </View>
            </View>
        </View>
        );
}

export default Cart;
