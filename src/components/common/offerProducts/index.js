/* eslint-disable prettier/prettier */
import React from 'react';
import {  Text, View, Image, FlatList } from 'react-native';
import  style  from './style';
import CommonSectionHeader from '../commonSectionHeader';
import { useNavigation } from '@react-navigation/native';

const OfferProducts = () => {
    const navigation = useNavigation();
    const products = [
        {
        id: 0,
        name: 'Lemon',
        content: 'Fresh lemons direct from farm',
        price: 10,
        image: require('../../../assets/images/email.png'),
        },
        {
        id: 1,
        name: 'Lemon',
        content: 'Fresh lemons direct from farm',
        price: 10,
        image: require('../../../assets/images/email.png'),
        },
        {
        id: 2,
        name: 'Lemon',
        content: 'Fresh lemons direct from farm',
        price: 10,
        image: require('../../../assets/images/email.png'),
        },
        {
        id: 3,
        name: 'Lemon',
        content: 'Fresh lemons direct from farm',
        price: 10,
        image: require('../../../assets/images/email.png'),
        },
        {
        id: 4,
        name: 'Lemon',
        content: 'Fresh lemons direct from farm',
        price: 10,
        image: require('../../../assets/images/email.png'),
        },
    ];
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
            </View>
        </View>
    );
};

export default OfferProducts;
