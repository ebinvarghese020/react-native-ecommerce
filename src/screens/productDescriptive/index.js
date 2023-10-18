/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, Image } from 'react-native';
import style from './style';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Define from './prod';
import Review from './review';
import Footer, { AddToCart } from './prodFooter';
import ProductScroll from '../../components/productsScroll';

const Descriptive = () => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            <Image
              key={i}
              source={i <= rating ? require('../../assets/images/starFill.png') : require('../../assets/images/star.png')}
              style={style.star}
            />
          );
        }
        return stars;
      };
      const productRating = 3;
    return (
        <View style={style.container}>
            <View style={style.center}>
                <Image source={{uri: 'https://toppng.com/uploads/preview/how-to-set-use-red-white-heart-icon-png-love-heart-11563411236sl0ynpmn4w.png'}} style={{width: 25, height: 25, resizeMode:'contain', alignSelf:'flex-end', marginRight:  20, marginTop: 20}} />
                <Image source={require('../../assets/images/google.png')} style={style.image} />
            </View>
            <ScrollView Style={{flex:1}}>
            <View style={style.box}>
                        <Text style={style.mainHeading}>Lemon</Text>
                        <View style={style.ratingContainer}>
                        {renderStars(productRating)}
                        <Text style={style.ratingText}>(1 Rating)</Text>
                        </View>
                        <View style={style.priceContainer}>
                        <Text style={style.priceText}>Rs. 10</Text>
                        <Text style={style.offerText}>25% OFF</Text>
                         </View>
                        <TouchableOpacity>
                            <View style={style.boxp}>
                                <Text style={style.ptext}>500g/24.00Rs ^</Text>
                                <Text style={style.ptext}>Delivery Time</Text>
                            </View>
                        </TouchableOpacity>
                        <Define head={'Product Detail'} body={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}/>
                        <Define head={'Manufacture Detail'} body={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}/>
                        <Define head={'Product Disclaimer'} body={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}/>
                        <Define head={'Feature and Details'} body={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}/>
                        <Review/>
                       <Footer/>
                </View>
                <ProductScroll />
                <AddToCart />
                </ScrollView>
        </View>
    );
};

export default Descriptive;
