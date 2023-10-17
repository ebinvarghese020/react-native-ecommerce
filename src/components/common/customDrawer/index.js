/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {View, Text, Image, TouchableOpacity } from 'react-native';
import style from './style';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../../storage/actions';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = ({navigation}) => {
 const dispatch = useDispatch();
 const {firstName, lastName, email, profileImage} = useSelector(state => state);
    const Contents = [
    {
      itemID:0,
      itemName: 'Home',
      navigateTo: 'MyFooter',
      icon: require('../../../assets/images/home.png'),
    },
    {
      itemID:1,
      itemName: 'Shope By Category',
      navigateTo: 'Category',
      icon: require('../../../assets/images/category.png'),
    },
    {
      itemID:2,
      itemName: 'Orders',
      navigateTo: 'Order',
      icon: require('../../../assets/images/shopping-cart.png'),
    },
    {
      itemID:3,
      itemName: 'Wishlist',
      navigateTo: 'Wishlist',
      icon: require('../../../assets/images/wishlist.png'),
    },
    {
      itemID:4,
      itemName: 'Account',
      navigateTo: 'Account',
      icon: require('../../../assets/images/user.png'),
    },
  ];
  const handleSignOut = () => {
    dispatch(signout());
  };
  return (
    <View style={style.container} >
      <TouchableOpacity onPress={() => navigation.navigate('Account')}>
        <View style={style.profile}>
          <View style={style.profilePic}>
            <Image source={{uri : profileImage}} style={style.profilePic}/>
          </View>
          <View style={style.profileView}>
              <Text style={style.profileName}>{firstName} {lastName}</Text>
              <Text style={style.profileGmail}>{email}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={style.content}>
        {Contents.map((item, index) => {
          return (
            <TouchableOpacity key={item.itemID} onPress={() => navigation.navigate(item.navigateTo)}>
              <View style={style.drawerFlex}>
              <Image source={item.icon} style={style.img} />
              <Text style={style.contentText}>{item.itemName}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity onPress={handleSignOut} >
        <View style={style.logoutWindow}>
        <Image source={require('../../../assets/images/back-button.png')} style={style.logoutImage}/>
        <Text style={style.logoutText}>Sign Out</Text>
        </View>
      </TouchableOpacity>

      <View style={style.contactWindow}>
        <Text style={style.contentText}>Contact Support</Text>
        <Text style={style.contactContent}>If you have any problem with the app please contact.</Text>
        <View style={style.bcontainer}>
            <Text style={style.btext}>Contact</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
