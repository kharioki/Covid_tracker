import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import ChartView from '../components/Home/ChartView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Entypo name="menu" size={30} />
        <View style={styles.headerContent}>
          <Text style={styles.headerDate}>June 29, 2020, 12:30 GMT</Text>
          <Text style={styles.headerTitle}>Corona Virus Cases</Text>
          <Text style={styles.headerNumber}>5,876,545</Text>
        </View>
      </View>
      <View>
        <ChartView />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  header: {
    padding: 10,
  },
  headerContent: {
    marginTop: 10,
  },
  headerDate: {
    fontSize: 14,
    fontWeight: '400',
    color: '#35343a',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#35343a',
    marginVertical: 8,
  },
  headerNumber: {
    fontSize: 45,
    fontWeight: '500',
    color: '#35343a',
  },
});
