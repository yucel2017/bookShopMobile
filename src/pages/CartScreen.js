import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Seperator from '../components/Seperator';
import { REMOVE_TO_CART } from '../redux/actions/actionTypes';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {

  const cartItems = useSelector(state => state);

  const dispatch = useDispatch();

  const removeItemFromCart = payload =>
    dispatch({
      type: REMOVE_TO_CART,
      payload,
    });

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={Seperator()}
        renderItem={({ item }) => (
          <View style={styles.bookItemContainer}>
            <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
            <View style={styles.bookItemMetaContainer}>
              <Text style={styles.textTitle}>{item.name}</Text>
              <Text style={styles.textAuthor}>{item.author}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => removeItemFromCart(item)}>
                <Text style={styles.buttonText}>Remove-</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyMessage}>Your Cart is empty!</Text>
            <TouchableOpacity
              style={styles.buttonEmpty}
              onPress={() => navigate('Books')}>
              <Text style={styles.buttonText}>Go to Books</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({

  container:

  {
    flex: 1,
    backgroundColor: '#fff'
  },

  thumbnail:
  {
    width: 100,
    height: 150
  },

  bookItemContainer:
  {
    flexDirection: 'row',
    padding: 10,
  },

  bookItemMetaContainer:
  {
    padding: 5,
    paddingLeft: 10,
  },

  textTitle:
  {
    fontSize: 22,
    fontWeight: '400'
  },

  textAuthor:
  {
    fontSize: 18,
    fontWeight: 'bold'
  },

  buttonContainer:
  {
    position: 'absolute',
    top: 110,
    right: 10
  },

  button:
  {
    borderRadius: 8,
    backgroundColor: '#ff333390',
    padding: 5
  },

  buttonEmpty:
  {
    borderRadius: 8,
    backgroundColor: 'blue',
    padding: 10
  },

  buttonText:
  {
    fontSize: 18,
    color: '#fff'
  },

  emptyContainer:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    gap: 10,
  },

  emptyMessage:
  {
    fontSize: 28
  },

})