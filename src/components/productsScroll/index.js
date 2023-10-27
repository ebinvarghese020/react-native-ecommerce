/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useState} from 'react';
import {  Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import  style  from './style';
import CommonSectionHeader from '../common/commonSectionHeader';
import colors from '../common/colors';
import firestore from '@react-native-firebase/firestore';
import productsView from '../../screens/products/index';
import ProductsView from '../../screens/products/index';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const ProductScroll = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const navigation = useNavigation();
    const {userId} = useSelector(state => state);

    const getProducts = async () => {
        await firestore().collection('Products').get()
        .then(snapshot =>{
            if ( !snapshot.empty ){
                const result = [];
                snapshot.docs.forEach(doc => {
                    if (doc.exists){
                        const responseData = {id: doc.id,...doc?.data()};
                        result.push(responseData);
                    }
                });
                setProducts(result);
            }
        });
    };
    const handleNavigate = () => {
        navigation.navigate('ProductsView');
        };

    const handleView = () => {
        navigation.navigate('Descriptive');
    }
    const AddToCart = async item => {
        console.warn(item);
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
        <View style={style.container}>
            <CommonSectionHeader
                head={'Newly Added'}
                content={'Pay less, Get more'}
                rightText={'See All'}
                handlePress={handleNavigate}/>

            <View style={{marginTop: 15}}>
                <FlatList
                    data={products}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({item, index}) => {
                    return (
                        <TouchableOpacity onPress={handleView}>
                            <View
                                style={{
                                    width: 150,
                                    height: 250,
                                    padding: 15,
                                    marginRight: 15,
                                    marginVertical: 15,
                                    borderRadius: 20,
                                    borderWidth: 1,
                                    borderColor: colors.black_level_3,
                                }}>
                                <Image
                                source= {{uri: 'https://toppng.com/uploads/preview/how-to-set-use-red-white-heart-icon-png-love-heart-11563411236sl0ynpmn4w.png'}} style={{width: 25, height: 25, resizeMode:'contain', alignSelf:'flex-end'}} />
                                <Image
                                source= {{uri : item.image}}
                                style={{width: 75, height: 75, resizeMode: 'contain', alignSelf: 'center', marginVertical: 10}} />
                                <Text style={{ fontFamily: 'Lato-Bold', fontSize: 18, color: colors.black}}>{item.name}</Text>
                                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14, color: colors.black}} numberOfLines={2}> {item.description}</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Text style={{ fontFamily: 'Lato-Bold', fontSize: 14, color: colors.black}}>{item.price}</Text>
                                    <View style={{padding:5, backgroundColor: colors.primary_green, borderRadius:5, margin:10}}>
                                        <Text 
                                        style={{fontFamily:'Lato-Bold',fontSize: 28, color: colors.white}}
                                        onPress={() => AddToCart(item)}>+</Text>
                                    </View>
                                </View>
                            </View>
                            </TouchableOpacity>
                    );
                    }}
                />
            </View>
        </View>
    );
};

export default ProductScroll;
