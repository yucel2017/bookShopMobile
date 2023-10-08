import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { books } from '../utils/data';
import Seperator from '../components/Seperator';
import {useDispatch} from 'react-redux';
import {ADD_TO_CART} from '../redux/actions/actionTypes';

export default function BookScreen() {

  const dispatch = useDispatch();

  const addItemToCart = payload =>
    dispatch({
      type: ADD_TO_CART,
      payload,
    });

  return (

    <View style={styles.container} >

      <FlatList
        data={books}
        renderItem={({ item }) => (

          <View style={styles.bookItemContainer} >

            <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />

            <View style={styles.bookItemMetaContainer} >
              <Text style={styles.textTitle} > {item.name} </Text>
              <Text style={styles.textAuthor} > {item.author} </Text>
            </View>
            <View style={styles.buttonContainer} >
              <TouchableOpacity style={styles.button} onPress={() => addItemToCart(item)} >
                <Text style={styles.buttonText} >Add +</Text>
              </TouchableOpacity>
            </View>
          </View>

        )
        }
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => Seperator()}
      />

    </View>
  )
}



const styles = StyleSheet.create({

  container:
  {
    flex: 1,
    backgroundColor: '#fff'
  },

  bookItemContainer:
  {
    flexDirection: 'row',
    padding: 10,
  },

  thumbnail:
  {
    width: 100,
    height: 150,
  },

  bookItemMetaContainer:
  {
    padding: 5,
    paddingLeft: 10,
  },

  textTitle:
  {
    fontSize: 22,
    fontWeight: '200',
  },

  textAuthor:
  {
    fontSize: 18,
    fontWeight: '400',
  },

  buttonContainer:
  {
    position: 'absolute',
    top: 110,
    right: 10,
  },

  button:
  {
    backgroundColor: '#24a0ed',
    borderRadius: 5,
    padding: 5,
  },

  buttonText:
  {
    fontSize: 22,
    color: '#fff'
  }



})