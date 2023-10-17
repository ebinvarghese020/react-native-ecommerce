/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { Image, View } from 'react-native';
import colors from '../../components/common/colors';

const AppSplash = () =>{
    return (
        <View style={{flex: 1, backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../assets/images/logo.jpg')} style={{width:150, height: 120, resizeMode: 'contain'}} />
        </View>
    );
};

export default AppSplash;
