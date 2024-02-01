import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CreateProduct = () => {
    return (
        <View style={st.container}>
            <Text style={{ fontSize: 24, marginBottom: 30, fontWeight: 'bold' }}>Create new Product</Text>
            <View style={{ width: '100%' }}>
                <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: 'bold' }}>ID</Text>
                <View style={st.input}>
                    <TextInput placeholder='Product id' />
                </View>
            </View>
            <View style={{ width: '100%' }}>
                <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: 'bold' }}>Name</Text>
                <View style={st.input}>
                    <TextInput  placeholder='Product name' />
                </View>
            </View>
            <TouchableOpacity style={st.btn}>
                <Text style={{ color: 'white', fontWeight: '700' }}>Save</Text>
            </TouchableOpacity>

        </View>
    )
}

export default CreateProduct

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