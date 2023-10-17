/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { View , ScrollView, Image, FlatList, ImageBackground, TouchableOpacity, Text } from 'react-native';
import  style  from './style';
import CustomSearch from '../../components/common/customSearch';
import firestore from '@react-native-firebase/firestore';
import colors from '../../components/common/colors';


const Category = () => {
    const [ categories, setCategories ] = useState([]);
    const [products, setProducts] = useState([]);
    const [active, setActive] = useState();
    useEffect(() => {
        getCategory();
        getProducts();
    }, []);
    const getCategory = async () => {
        await firestore()
            .collection('Categories')
            .get()
            .then(snapshot => {
                if ( !snapshot.empty ){
                    const result = [];
                    snapshot.docs.forEach(doc =>{
                        if (doc.exists){
                            result.push(doc.data());
                        }
                    });
                    setCategories(result);
                    setActive(0);
                }
            })
            .catch(err =>{
                console.log( 'ERROR ', err);
            });
    };
    const getProducts = async () => {
        await firestore().collection('Products').get()
        .then(snapshot =>{
            if ( !snapshot.empty ){
                const result = [];
                snapshot.docs.forEach(doc => {
                    if (doc.exists){
                        result.push(doc.data());
                    }
                });
                setProducts(result);
            }
        });
    };
    const handleTouch = index => {
        console.log(index);
        setActive(index);
        };
    return (
        <View style={style.main}>
            <ScrollView
                style={style.container}
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}>
                <CustomSearch />
                <View style={style.rowStyle}>
                    <View>
                        <FlatList
                            data={categories}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={style.catFlatStyle}
                            renderItem={({item, index}) => {
                                return (
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    <TouchableOpacity style={[style.catTouch, {backgroundColor: index === active ? colors.white : 'transparent'}]} onPress={() => handleTouch(index)}>
                                    <Image source={{ uri: item.image}}
                                            style={style.catImage}
                                    />
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                            <ScrollView>
                                <ImageBackground
                                    source={require('../../assets/images/bg2.jpg')}
                                    style={style.backImage} >
                                    <Text style={style.catName} numberOfLines={1}>{categories[active]?.name}</Text>
                                    <Text style={style.catDesc} numberOfLines={3}>{categories[active]?.description}</Text>
                                </ImageBackground>
                                <FlatList
                                    numColumns={2}
                                    data={products}
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={style.proStyle}
                                    renderItem={({item, index}) => {
                                        return (
                                            <TouchableOpacity style={style.proContainer}>
                                                <View style={style.imageBg}>
                                                <Image source={{uri: item.image}} style={style.propImage} />
                                                </View>
                                                <Text style={style.proName}>{item.name}</Text>
                                                <Text style={style.proDesc}> Rs.{item.price}</Text>
                                            </TouchableOpacity>
                                        );
                                    }}/>
                            </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
};

export default Category;
