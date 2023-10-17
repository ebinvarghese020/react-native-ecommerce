/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text , TouchableOpacity, Image, Modal } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';

import  style  from './style';
import CustomTextInput from '../../components/common/customTextInput';
import CustomButton from '../../components/common/customButton';
import { validateEmail, validatePhoneNumber } from '../../components/common/validations';
import Snackbar from 'react-native-snackbar';
import colors from '../../components/common/colors';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../storage/actions';
import { updateProfileImage } from '../controller';

const Account = () => {
    const {userId, firstName, lastName, email, mobileNo, profileImage} = useSelector(state => state);
    const [modal, setModal] = useState(false);
    const [userImage, setImage] = useState(profileImage);
    const [stateEmail, setEmail] = useState(email);
    const [statemobile, setMobile] = useState(mobileNo);
    const [first, setFirst] = useState(firstName);
    const [last, setLast] = useState(lastName);
    const dispatch = useDispatch();
    console.warn(profileImage);

    const handleOpenImage = () => {
        setModal(!modal);
    };
    const handleEditImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            setImage(image.path );
          });
    };
    const handleUpdateProfile = async () => {
        if (statemobile !== ''){
            if (validatePhoneNumber(statemobile)){
                if (validateEmail(stateEmail.trim())){
                    if ( first !== '' && last !== ''){
                        let newUrl  = '';
                        if ( userImage !== '') {
                            newUrl = await updateProfileImage(userImage);
                        }
                        else {
                            Snackbar.show({
                                text: 'Please enter add a picture.',
                                duration: Snackbar.LENGTH_SHORT,
                                backgroundColor: colors.RED,
                                textColor: colors.white,
                            });
                        }
                        console.warn('newURL', newUrl);
                        await firestore()
                                .collection('Users')
                                .doc(userId)
                                .update({
                                    firstName: first,
                                    lastName: last,
                                    email: stateEmail,
                                    mobilenumber: statemobile,
                                    pimage: newUrl,
                                }).then(() => {
                                    dispatch(update({
                                        firstName: first,
                                        lastName: last,
                                        email: stateEmail,
                                        mobileNo: statemobile,
                                        profileImage: newUrl,
                                    }));
                                    Snackbar.show({
                                        text: 'Profile Updated Successfully',
                                        duration: Snackbar.LENGTH_SHORT,
                                        backgroundColor: colors.primary_green,
                                        textColor: colors.white,
                                    });
                                });
                    } else {
                        Snackbar.show({
                            text: 'Please enter first and last names',
                            duration: Snackbar.LENGTH_SHORT,
                            backgroundColor: colors.RED,
                            textColor: colors.white,
                        });
                    }
                } else {
                    Snackbar.show({
                        text: 'Please enter valid email ID',
                        duration: Snackbar.LENGTH_SHORT,
                        backgroundColor: colors.RED,
                        textColor: colors.white,
                    });
                }
            } else {
                Snackbar.show({
                    text: 'Please Enter valid phone number',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor: colors.RED,
                    textColor: colors.white,
                });
            }
        } else {
            Snackbar.show({
                text: 'Please fill all fields',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: colors.RED,
                textColor: colors.white,
            });
        }
    };
    return (
        <View style={style.container}>
            <View style={style.boxContainer}>
                <Text style={style.name}>{firstName} {lastName}</Text>
                <View style={style.editView}>

                <TouchableOpacity onPress={handleOpenImage}>
                <Image
                    source={userImage ? {uri: userImage} : require('../../assets/images/email.png') }
                    style={style.profileImg}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleEditImage}>
                <View style={style.editContainer}>
                    <View style={style.edit}><Image source={require('../../assets/images/back-button.png')} style={style.editImg}/></View>
                </View>
                </TouchableOpacity>
                </View>
            <View style={style.textInput}>
            <CustomTextInput placeholder={'First Name'} handleText={text => setFirst(text)} value={first}/>
            <CustomTextInput placeholder={'Last Name'} handleText={text => setLast(text)} value={last}/>
            <CustomTextInput placeholder={'Email'} type={'email'} handleText={text => setEmail(text)} value={stateEmail}/>
            <CustomTextInput placeholder={'Mobile Number'} type={'phone'} handleText={text => setMobile(text)} value={statemobile}/>
            </View>
            <CustomButton ButtonText={'Update Account'} type={'primary'} handleButtonPress={handleUpdateProfile}/>
            </View>

            <Modal visible={modal} onRequestClose={() => setModal(false)} transparent>
                <View style={style.modelBack}>
                    <Image
                    source={userImage ? {uri: userImage} : require('../../assets/images/email.png') }
                    style={style.bigImage} />
                    <TouchableOpacity onPress={() => {setModal(false);}}>
                        <Image source={require('../../assets/images/back-button.png')} style={style.editImgRed}/>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default Account;
