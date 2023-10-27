/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import { Alert, Share, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShare, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import style from './style';


const CommonRightHeader = props => {
    const navigation = useNavigation();
    const handleClickCart = () => {
        navigation.navigate('Cart');
    }
    const handleShare = async () => {
        try {
            const result = await Share.share({
              message:
                '  Share the product.',
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            Alert.alert(error.message);
          }
    }
    return (
        <View style={style.contain}>
            {
                props.share ? (
                    <TouchableOpacity style={style.share} onPress={handleShare}>
                        <FontAwesomeIcon icon={faShare} size={25} color="black" />
                    </TouchableOpacity>
                ) : null
            }
            {
                props.cart ? (
                    <TouchableOpacity style={style.cart} onPress={handleClickCart}>
                        <FontAwesomeIcon icon={faCartPlus} size={25} color="black" />
                    </TouchableOpacity>
                ) : null
            }
        </View>
    ); 
};

export default CommonRightHeader;
