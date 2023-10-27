/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { View, Text, FlatList } from 'react-native';
import CustomSearch from '../../components/common/customSearch';
import OfferProducts from '../../components/common/offerProducts';
import style from './style';

const ProductsView = () => {
    const category =[
        {
            id: 0,
            name: 'All',
        },
        {
            id: 1,
            name: 'Food',
        },
        {
            id: 2,
            name: 'Grocery',
        },
        {
            id: 3,
            name: 'Electronics',
        },
        {
            id: 4,
            name: 'Beauty',
        },
        {
            id: 4,
            name: 'Clothing',
        },
    ];
    return (
        <View style={style.outer}>
            <View style={style.container1}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={category}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({item, index}) => {
                        return (
                                <View style={style.container}>
                                        <Text style={style.text}>{item.name}</Text>
                                </View>
                                );
                            }
                        }/>
                </View>
            <CustomSearch text={'Filter'} />
            <OfferProducts/>
        </View>
    );
};

export default ProductsView;
