import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ToDo List</Text>
    </View>
  );
}

export default Header;
