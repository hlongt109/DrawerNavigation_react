import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Home from '../src/Home';
import About from '../src/About';
import { SafeAreaView } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

const Header = () => {
    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <Image source={require("../assets/avt.jpg")} style={styles.avatar} />
                <Text style={styles.username} >Tran Hoang Long</Text>
            </View>
        </SafeAreaView>
    )
}

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <Header />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={CustomDrawerContent}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#fff",
                    width: 350
                },
                headerStyle: {
                    backgroundColor: "#f4511e"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold"
                },
                drawerLabelStyle: { color: "#111" }
            }}>
            <Drawer.Screen
                name='Home'
                options={{
                    drawerLabel: "Home",
                    title: "Home",
                    drawerIcon: ({ color, size }) => (
                        <Ionicon name={"home-outline"} size={size} color={color} />
                    ),
                }}
                component={Home} />
            <Drawer.Screen
                name='About'
                options={{
                    drawerLabel: "About",
                    title: "About",
                    drawerIcon: ({ color, size }) => (
                        <Ionicon name={"alert-circle-outline"} size={size} color={color} />
                    ),
                }}
                component={About} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 200,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#f4f4f4",
        borderBottomWidth: 1
    },
    avatar: {
        height: 130,
        width: 130,
        borderRadius: 65,
    },
    username: {
        fontSize: 22,
        marginVertical: 6,
        fontWeight: 'bold',
        color: '#111',
    },
})

export default DrawerNavigation

