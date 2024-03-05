import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ToDo List</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 'auto',
    width: '80%',
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
