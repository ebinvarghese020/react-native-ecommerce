/* eslint-disable prettier/prettier */
import { View, Text, Image, FlatList } from 'react-native';
import style from './style';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';


const ShopCategory = () => {
    useEffect(() => {
        getCategories();
    }, []);
    const [categories, setCategories ] = useState([]);
    const getCategories = async () => {
        await firestore()
        .collection('Categories')
        .get()
        .then( snapshot => {
            if ( !snapshot.empty ) {
                const result = [];
                snapshot.docs.forEach(doc => {
                    if ( doc.exists){
                        result.push(doc.data());
                    }
                });
                setCategories(result);
            }
        })
        .catch( err =>{
            console.log( 'ERROR ', err);
        });

    };
    return (
        <View style={style.container}>
            <Text style={style.head}> Shop By Category</Text>
            <FlatList
                data={categories}
                numColumns={4}
                contentContainerStyle={style.flatList}
                keyExtractor={(item, index) => String(index)}
                renderItem={({item,index}) => {
                    return (
                        <View style={style.innerView}>
                            <View style={style.imageView}>
                            <Image source={{uri : item.image}} style={style.image} />
                            </View>
                            <Text style={style.itemName}>{item.name}</Text>
                        </View>

                    );}
                }
                    />
        </View>
    );
};

export default ShopCategory;
