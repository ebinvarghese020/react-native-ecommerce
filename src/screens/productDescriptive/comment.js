/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useRef, useState} from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../components/common/colors';
import { useNavigation } from '@react-navigation/native';
import ActionSheet from 'react-native-actions-sheet';
import CustomTextInput from '../../components/common/customTextInput';
import StarRating from 'react-native-star-rating-widget';
import CustomButton from '../../components/common/customButton';

const Comments = () =>{
    const navigation = useNavigation();
    const actionSheetRef = useRef(null);
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={OpenActionSheet}>
                    <Text style={{color:colors.black, marginRight: 30, fontSize: 32}}>+</Text>
                </TouchableOpacity>
            )
        });
    });

    const [rating, setRating] = useState(0);

    const OpenActionSheet = () => {
        actionSheetRef.current.show();
    }
    const productRating = 3;
    return (
        <View style={{flex:1}}>
            <ScrollView>
                <View style={{ backgroundColor: colors.white, borderRadius: 15, margin: 10, marginVertical: 20, padding: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/images/user.png')} style={{height: 30, width: 30, marginRight: 10}} />
                        <View>
                            <Text style={{color: colors.black, fontFamily: 'Lato-Bold', fontSize: 18}}>Philip P Fernandus</Text>
                            <StarRating starSize={20} rating={productRating} onChange={setRating} />
                        </View>
                    </View>
                    <Text style={{color: colors.black, fontFamily: 'Lato-Regular', fontSize: 12, padding: 10}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.            
                    </Text>
                </View>

                <ActionSheet ref={actionSheetRef}>
                    <View style={{padding: 20}}>
                    <Text style={{color: colors.black,lineHeight: 50, fontFamily: 'Lato-Black', fontSize: 18}}>Write a review</Text>
                    <StarRating starSize={28} rating={rating} onChange={setRating} />
                    <CustomTextInput placeholder={'Write here.'} multiline={true}/>
                    <CustomButton type={'primary'} ButtonText={'Submit Review'}/>
                    </View>
                </ActionSheet>
                </ScrollView>
        </View>
    );
};

export default Comments;

