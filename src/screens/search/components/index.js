/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import  style  from './style';
import firestore from '@react-native-firebase/firestore';


const Trending = () => {
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
        <View style={style.main}>
            <Text style={style.title}> Trending Categories</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => String(index)}
                contentContainerStyle={style.flatList}
                data={categories}
                renderItem={({item, index}) => {
                    return (
                         <View style={style.imageContainer}>
                            <Image source={{ uri: item.image}} style={style.image} />
                         </View>
                    );
                }}
            />
        </View>
    );
};

export default Trending;
