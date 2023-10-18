/* eslint-disable prettier/prettier */
/* eslint-disable no-func-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */

import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';

import Login from '../Login';
import Signup from '../Signup';
import SignupPhone from '../LoginPhone';
import Home from '../home';
import { DimensionContextProvider } from '../../components/context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomDrawer from '../../components/common/customDrawer';
import CustomFooter from '../../components/common/customFooter';
import Category from '../category';
import Search from '../search';
import Offers from '../Offers';
import Cart from '../cart';
import Order from '../order';
import Wishlist from '../wishlist';
import Account from '../account';
import { store } from '../../storage/store';
import {Provider, useSelector} from 'react-redux';
import AppSplash from '../splash';
import ProductsView from '../products';
import colors from '../../components/common/colors';
import Descriptive from '../productDescriptive';
import Comments, { HeaderRight } from '../productDescriptive/comment';

const Drawer = createDrawerNavigator();

const AppDrawer = (props) => {
  return (
    <Drawer.Navigator
      // screenOptions={{ headerShown: false }}
      initialRouteName="MyFooter"
      drawerContent={(props) => <CustomDrawer {...props}/>}
      screenOptions={{
        // headerLeft: () =>  <CommonHeaderLeft />,
        headerTitleAlign: 'left',
      }}
    >
      <Drawer.Screen
        name="MyFooter"
        component={AppFooter}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Category" component={Category} />
      <Drawer.Screen name="Order" component={Order} />
      <Drawer.Screen name="ProductsView" component={ProductsView} />
      <Drawer.Screen name="Wishlist" component={Wishlist} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Descriptive" component={Descriptive}/>
      <Drawer.Screen name="Comment" component={Comments} options={{headerRight: () =>(
        <TouchableOpacity>
          <Text style={{fontSize: 30, fontFamily: 'Lato-Bold', color: colors.black, marginRight: 20}}>+</Text>
    </TouchableOpacity>
      )}}/>
    </Drawer.Navigator>
  );
};

const Footer = createBottomTabNavigator();
const AppFooter = (props) => {
  AppNavigation = useNavigation();
  return (
    <Footer.Navigator
      tabBar={(props) => <CustomFooter {...props}/>}
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleStyle: { fontFamily: 'Lato-Bold', fontSize: 22 },
        headerLeft: () => (
          <TouchableOpacity onPress={() => AppNavigation.openDrawer()}> 
            <Text style={{ marginLeft: 16, color: colors.black, fontSize: 24 }}>☰</Text> 
          </TouchableOpacity>
        ),
      }}
    >
      <Footer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Footer.Screen name="Categories" component={Category} />
      <Footer.Screen name="Search" component={Search} />
      <Footer.Screen name="Offers" component={Offers} />
      <Footer.Screen name="Cart" component={Cart} />
    </Footer.Navigator>
  );
};

const AppStack = createNativeStackNavigator();

function AppNavigation() {
  const { isLoggedIn } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [isLoggedIn]);
  return (
    <DimensionContextProvider>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          {loading ? (
            <AppStack.Screen name="Splash" component={AppSplash} />
          ) : (
            <>
              {isLoggedIn ? (
                <AppStack.Screen name="MyDrawer" component={AppDrawer} />
              ) : (
                <>
                  <AppStack.Screen name="Login" component={Login} />
                  <AppStack.Screen name="SignUp" component={Signup} />
                  <AppStack.Screen name="LoginPhone" component={Login} />
                </>
              )}
            </>
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </DimensionContextProvider>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};
export default App;
