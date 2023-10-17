/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import style from './style';

const RecentBought = () => {
    const reactItems = [
        {id: 0, image: require('../../../../assets/images/email.png')},
        {id: 1, image: require('../../../../assets/images/email.png')},
        {id: 2, image: require('../../../../assets/images/email.png')},
        {id: 3, image: require('../../../../assets/images/email.png')},
        {id: 4, image: require('../../../../assets/images/email.png')},
    ];
    return (
        <View style={style.container}>
            <Text style={style.head}> Buy from Recently Bought</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={reactItems}
                keyExtractor={(item, index) => String(index)}
                renderItem={({item,index}) => {
                    return (
                        <View style={style.contentView}>
                            <Image source={item.image} style={style.image} />
                        </View>
                    );}
                }
                    />
        </View>
    );
};

export default RecentBought;
