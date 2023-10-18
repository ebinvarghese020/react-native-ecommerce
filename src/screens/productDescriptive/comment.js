/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect} from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from 'react-native-vector-icons';
import colors from '../../components/common/colors';
import { useNavigation } from '@react-navigation/native';


const Comments = () =>{
    const navigation = useNavigation();
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
    return (
        <View style={{flex:1}}>
            <ScrollView>
                <View style={{ backgroundColor: colors.white, borderRadius: 15, margin: 10, marginVertical: 20, padding: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/images/user.png')} style={{height: 30, width: 30, marginRight: 10}} />
                        <View>
                            <Text style={{color: colors.black, fontFamily: 'Lato-Bold', fontSize: 18}}>Philip P Fernandus</Text>
                            <View style={{flexDirection: 'row'}}>
                                {renderStars(productRating)}
                            </View>
                        </View>
                    </View>
                    <Text style={{color: colors.black, fontFamily: 'Lato-Regular', fontSize: 12, padding: 10}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.            
                    </Text>
                </View>

                <View style={{ backgroundColor: colors.white, borderRadius: 15, margin: 10, marginVertical: 20, padding: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/images/user.png')} style={{height: 30, width: 30, marginRight: 10}} />
                        <View>
                            <Text style={{color: colors.black, fontFamily: 'Lato-Bold', fontSize: 18}}>Philip P Fernandus</Text>
                            <View style={{flexDirection: 'row'}}>
                                {renderStars(productRating)}
                            </View>
                        </View>
                    </View>
                    <Text style={{color: colors.black, fontFamily: 'Lato-Regular', fontSize: 12, padding: 10}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.            
                    </Text>
                </View>

                <View style={{ backgroundColor: colors.white, borderRadius: 15, margin: 10, marginVertical: 20, padding: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/images/user.png')} style={{height: 30, width: 30, marginRight: 10}} />
                        <View>
                            <Text style={{color: colors.black, fontFamily: 'Lato-Bold', fontSize: 18}}>Philip P Fernandus</Text>
                            <View style={{flexDirection: 'row'}}>
                                {renderStars(productRating)}
                            </View>
                        </View>
                    </View>
                    <Text style={{color: colors.black, fontFamily: 'Lato-Regular', fontSize: 12, padding: 10}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.            
                    </Text>
                </View>

                <View style={{ backgroundColor: colors.white, borderRadius: 15, margin: 10, marginVertical: 20, padding: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/images/user.png')} style={{height: 30, width: 30, marginRight: 10}} />
                        <View>
                            <Text style={{color: colors.black, fontFamily: 'Lato-Bold', fontSize: 18}}>Philip P Fernandus</Text>
                            <View style={{flexDirection: 'row'}}>
                                {renderStars(productRating)}
                            </View>
                        </View>
                    </View>
                    <Text style={{color: colors.black, fontFamily: 'Lato-Regular', fontSize: 12, padding: 10}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.            
                    </Text>
                </View>

                <View style={{ backgroundColor: colors.white, borderRadius: 15, margin: 10, marginVertical: 20, padding: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/images/user.png')} style={{height: 30, width: 30, marginRight: 10}} />
                        <View>
                            <Text style={{color: colors.black, fontFamily: 'Lato-Bold', fontSize: 18}}>Philip P Fernandus</Text>
                            <View style={{flexDirection: 'row'}}>
                                {renderStars(productRating)}
                            </View>
                        </View>
                    </View>
                    <Text style={{color: colors.black, fontFamily: 'Lato-Regular', fontSize: 12, padding: 10}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.            
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Comments;

