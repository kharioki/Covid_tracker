import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  header: {},
});
