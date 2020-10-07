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

const DetailFood= ({ route }) => {

  const {food, title} = route.params;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <View style={styles.viewDetail}>
        <Image style={styles.trendingFood} source= {food.image} />
        <Text style={styles.textDetail}>{title}</Text>
        <Text style={styles.textDetail}>{food.name}</Text>
        <Text style={styles.textDetail}>{food.description}</Text>        
        {food.ingredients.map( r =>
          <Text style={styles.sectionTitle}>{r.ingredient} cantidad: {r.quantity}</Text>          
        )} 
      </View>      
      </SafeAreaView>
    </>
  ); };

const styles = StyleSheet.create({
  trendingFood: {
    backgroundColor: '#2c2c2c',
    opacity: .4,
    width: Dimensions.get('window').width,
    height: 300,
    fontSize: 45,
  },
  viewDetail: {
    position: 'absolute', 
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0, 
  },
  textDetail: {
    top: -50,
    textAlign: "left",
    color: 'white',
    
  }
});

export default DetailFood;
