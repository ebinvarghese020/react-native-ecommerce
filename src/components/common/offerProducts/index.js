/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {  Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import  style  from './style';
import CommonSectionHeader from '../commonSectionHeader';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { err } from 'react-native-svg/lib/typescript/xml';


const OfferProducts = () => {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [qty, setQty] = useState(0);
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
                        if (doc.exists) {
                            results.push(doc.data());
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
                    renderItem={({item, index}) => {
                    return (
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
                            <TouchableOpacity onPress={() => setQty(qty + 1)}>
                            <Text style={style.qunText1} >+</Text>
                            </TouchableOpacity>
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

export default OfferProducts;
