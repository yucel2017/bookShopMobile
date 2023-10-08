import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Seperator() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {borderBottomWidth: 1, borderBottomColor: '#a9a9a9'},
});
