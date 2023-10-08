import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

function ShoppingCartIcon(props) {
  const {navigate} = useNavigation();

  const cartItems = useSelector(state => state);

  return (
    <TouchableOpacity onPress={() => navigate('Cart')} style={styles.button}>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItems.length}</Text>
      </View>
      <Icon name="Cart" size={30} color="#101010" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {marginRight: 10},
  itemCountContainer: {
    position: 'absolute',
    backgroundColor: '#ff7d7d',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20000,
  },
  itemCountText: {color: '#fff', fontWeight: 'bold'},
});

export default ShoppingCartIcon;
