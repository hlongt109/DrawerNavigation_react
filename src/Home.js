import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: 'p1',
    title: 'Product 1',
  },
  {
    id: 'p2',
    title: 'Product 2',
  },
  {
    id: 'p3',
    title: 'Product 3',
  },
];

const Item = ({ title }) => (
  <View style={st.item}>
    <Text style={st.title}>{title}</Text>
  </View>
);

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={st.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id} />
      <TouchableOpacity style={st.addButton} onPress={() => navigation.navigate("Create Product")}>
        <Text style={st.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home

const st = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'gray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20
  },
  title: {
    fontSize: 32,
    color: 'white'
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#f4511e',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: 'white',
  },
})