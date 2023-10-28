/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {  Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import  style  from './style';
import CommonSectionHeader from '../commonSectionHeader';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';


const OfferProducts = () => {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        await firestore()
                .collection('Products')
                .get()
                .then(snapshot => {
                    if ( !snapshot.empty ){
                        const results = [];
                        snapshot.docs.forEach(doc => {
                            if (doc.exists){
                                const responseData = {id: doc.id,...doc?.data()};
                                results.push(responseData);
                            }
                    });
                    setProducts(results);
                    }
                })
                .catch( errors => {
                    console.warn(errors);
                });
    };
    const handleNavigate = () => {
        navigation.navigate('ProductsView');
    };

    return (
        <View style={style.container}>
            <CommonSectionHeader
                head={'Say Hello To Offers'}
                content={'Best ever prive'}
                rightText={'See All'}
                handlePress= {handleNavigate}/>

            <View style={style.one}>
                <FlatList
                    data={products}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({item, index}) => (
                    <RenderItem item={item} index={index} />
    )}
                />
            </View>
        </View>
    );
};

const RenderItem = ({item, index}) => {
    const [qty, setQty] = useState(0);
    const {userId} = useSelector(state => state);
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
              })
    }
    return (
        <TouchableOpacity>
        <View
            style={style.productView}>
            <Image
            source= {{uri : item.image}}
            style={style.productImage} />
            <View style={style.nameView}>
            <Text style={style.texts}>{item.name}</Text>
            <Text style={style.textsOne} numberOfLines={2}> {item.description}</Text>

            <View >
                <View style={style.des}>

                        <Text style={style.texts}>{item.price} Rs</Text>
                    <View style={style.offer}>
                        <Text style={style.offerText}>10%</Text>
                    </View>
                </View>
            <View style={style.qunView}>
                <TouchableOpacity onPress={() => setQty(qty > 0 ? qty - 1 : 0)}>
                <Text style={style.qunText1} >-</Text>
                </TouchableOpacity>
                <Text style={style.qunText2}>{qty}</Text>
                <TouchableOpacity onPress={() => {setQty(qty + 1)
                                                    AddToCart(item)}}>
                <Text style={style.qunText1} >+</Text>
                </TouchableOpacity>
            </View>
            </View>
            </View>
        </View>
        </TouchableOpacity>
        );
}

export default OfferProducts;
