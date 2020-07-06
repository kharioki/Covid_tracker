import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ChartLine = () => {
  return (
    <View style={styles.line}>
      <View style={styles.fill} />
    </View>
  );
};

export default ChartView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DEATHS</Text>
      <Text style={styles.number}>313,598</Text>
      <View style={styles.chartContainer}>
        <ChartLine />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  number: {
    fontSize: 40,
    fontWeight: '500',
    color: '#E25858',
  },
  chartContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  line: {
    width: 4,
    height: 100,
    backgroundColor: '#EAEAE8',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  fill: {
    height: 20,
    backgroundColor: '#B56A63',
  },
});
