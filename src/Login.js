import { Pressable, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            navigation.navigate("DrawerNavigation");
        } else {
            ToastAndroid.show("username or password is invalid", ToastAndroid.SHORT);
        }
    }
    return (
        <View style={st.container}>
            <View style={st.input}>
                <TextInput value={username} onChangeText={setUsername} placeholder='Username' />
            </View>
            <View style={st.input}>
                <TextInput value={password} onChangeText={setPassword} placeholder='Password' secureTextEntry />
            </View>
            <TouchableOpacity style={st.btn}
                onPress={handleLogin}>
                <Pressable>
                    <Text style={{ color: 'white', fontWeight: '700' }}>LOGIN</Text>
                </Pressable>
            </TouchableOpacity>

        </View>
    )
}

export default Login

const st = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 25,
        paddingHorizontal: 20
    },
    btn: {
        width: '50%',
        backgroundColor: '#f4511e',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
})