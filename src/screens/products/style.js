/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../components/common/colors';

const { width, height } = Dimensions.get('screen');
const style = StyleSheet.create({
  outer: {
    flex:1,
  },
  container1: {
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: colors.primary_green,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
});

export default style;
