/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import data from './BDD/products';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image, 
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DetailFood: (  ) => React$Node = () => {


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <View style={styles.viewDetail}>
        <Image style={styles.trendingFood} source= {require('../images/1.jpg')} />
        <Text style={styles.textDetail}>Trend</Text>
        <Text style={styles.textDetail}>Pepperoni Pizza</Text>
      </View>      
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  trendingFood: {
    backgroundColor: '#2c2c2c',
    opacity: .4,
  },
  viewDetail: {
    height : 350,
    width : Dimensions.get('window').width,
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textDetail: {
    top: -50,
    textAlign: "left",
  }
});

export default DetailFood;