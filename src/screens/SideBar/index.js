/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable keyword-spacing */
import * as React from 'react';
import { View, TextInput, StyleSheet, Button, Image,ImageBackground } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function SearchTextInput() {
  return (
    <TextInput
      placeholder="Search..."
      style={styles.searchInput}
    />
  );
}

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 15,
    marginRight: 50,
    width:300,
  },
});

function CustomDrawero(props){
  return(
    <><DrawerContentScrollView {...props}>
    <ImageBackground style={{padding:60, backgroundColor:'maroon'}}>
      <Image source={require('../../assets/images/user.png')} style={{width:100, height:100}}/>
    </ImageBackground>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
  </>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawero {...props}/>}
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor:'green',
          },
          headerTintColor:'white',
          headerRight: () => <SearchTextInput/>,
        }}
        >
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          drawerIcon: () => (<AntDesign name="home" color="#ADD8E6" size={20} />) }}/>
        <Drawer.Screen name="Profile" component={NotificationsScreen} options={{
          drawerIcon: () => (<AntDesign name="user" color="#ADD8E6"  size={20} />) }}/>
        <Drawer.Screen name="My Listing" component={HomeScreen} options={{
          drawerIcon: () => (<Entypo name="list" color="#ADD8E6" size={20} />) }}/>
        <Drawer.Screen name="Forums" component={HomeScreen}  options={{
          drawerIcon: () => (<MaterialCommunityIcons name="forum" color="#ADD8E6" size={20} />) }}/>
        <Drawer.Screen name="Settings" component={HomeScreen} options={{
          drawerIcon: () => (<AntDesign name="setting" color="#ADD8E6" size={20} />) }}/>
        <Drawer.Screen name="Help" component={HomeScreen} options={{
          drawerIcon: () => (<AntDesign name="gui" color="#ADD8E6" size={20} />) }}/>
        <Drawer.Screen name="Logout" component={HomeScreen}  options={{
          drawerIcon: () => (<AntDesign name="logout" color="#ADD8E6" size={20} />) }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

