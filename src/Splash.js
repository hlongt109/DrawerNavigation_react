import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login")
        }, 3000);
    }, [])
    return (
        <View style={st.container}>
            <Image source={require("../assets/avt.jpg")}
                style={st.avt} />
            <View style={{marginTop: 30}}>
                <Text style={st.txt}>Tran Hoang Long</Text>
                <Text style={st.txt}>ph30891</Text>
                <Text style={st.txt}>CRO101-MD18305</Text>
            </View>

        </View>
    )
}

export default Splash

const st = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avt: {
        width: 180,
        height: 180,
        borderRadius: 50
    },
    txt: {
        fontSize: 20,
        marginBottom: 15
    }
})