/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../components/common/colors';
import { useNavigation } from '@react-navigation/native';

const Review = () => {
    const [press, setPress] = useState(false);
    const navigation = useNavigation();
    const handlePress = () => {
        setPress(!press);
    };
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            <Image
              key={i}
              source={i <= rating ? require('../../assets/images/starFill.png') : require('../../assets/images/star.png')}
              style={{
                height: 15,
                width: 15,
            }}
            />
          );
        }
        return stars;
      };
      const productRating = 3;
    const handleComment = () => {
        navigation.navigate('Comment');
    }
    return (
        <View style={{ marginTop: 25}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{
                        color: colors.black,
                        fontFamily: 'Lato-Bold',
                        fontSize: 20,}}>
                    Product Review
                </Text>
                <TouchableOpacity onPress={handleComment}>
                    <Text style={{
                            color: colors.primary_green,
                            fontFamily: 'Lato-Bold',
                            fontSize: 16,}}>
                                See All
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor: '#d3d3d3', borderRadius: 15, padding: 10, marginTop:10}}>
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../../assets/images/search.png')} style={{height: 20, width:20, marginRight: 10,}} />
                <View>
                <Text style={{
                    color: colors.black,
                    fontFamily: 'Lato-Bold',
                    fontSize: 14,
                    alignSelf: 'center',
                }}>Philip P Fernandus</Text>
                <View style={{flexDirection: 'row'}}>
                    {renderStars(productRating)}
                </View>
            </View>
            </View>
            <Text style={{
                marginTop: 5,
                color: colors.black,
                fontFamily: 'Lato-Regular',
                fontSize: 12,
                padding: 5,
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.            </Text>
        </View>
        </View>
    );
};

export default Review;