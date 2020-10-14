/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import styles from '../styles/stylesDetail';
import App from '../App';

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
  Dimensions,
  Pressable,
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DetailFood= ({ route, navigation }) => {

  const {food, title, foodArr, setFood} = route.params;
  const [isFav, setIsFav] = useState(food.love);

  function changeLike2(){
    var index = foodArr.findIndex(element=> element.id === food.id);
    if(food.love == "0"){
      food.love = "1";            
    }else{
      food.love = "0";
    }
    setIsFav(food.love)
    setFood([
      ...foodArr.slice(0,index),
      food,
      ...foodArr.slice(index+1)
    ]);
  }
  
  return (
    <>
        <View style={styles.topBar}>
          <View style={styles.leftButton}> 
            <View style={styles.backButton}>
            <Pressable
              onPress={() => {
                navigation.navigate('Home')
              }}>
              <Image style={[styles.icons, styles.cerrar]} source={require('../images/boton-cerrar.png')} />
            </Pressable>
            </View>
          </View>
          <View style={styles.rightButtons}>
            <View style={styles.likeButton}>
            <Pressable
              onPress={changeLike2}>
              {food.love == "0" 
                ? <Image style={styles.iconLike} source={require('../images/like.png')} /> 
                : <Image style={styles.iconLike} source={require('../images/unlike.png')} />}
              </Pressable>
            </View>
            <View style={styles.shareButton}>
              <Image style={styles.iconShare} source={require('../images/share.png')} />
            </View>
          </View>
        </View>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        <View style={styles.viewDetail}>
          <Image style={styles.trendingFood} source= {food.image} />
          <Text style={styles.textDetail}>{title}</Text>
          <Text style={styles.textName}>{food.name}</Text>
          <Text style={styles.textDescription}>{`Ingredients`}</Text>
          <Text style={styles.textServings}>{`for ${food.servings} servings`}</Text> 
        </View>  
        <ScrollView style={styles.scrollView}> 
              {food.ingredients.map( (r, index) =>
                <View  style={styles.ingView} key={index}>
                  <Text style={styles.ingredients}>{r.ingredient}</Text>
                  <Text style={styles.ingredients2}> {r.quantity}</Text>
                </View>
              )}              
        </ScrollView>
        </SafeAreaView>
      </View>
    </>
  ); };


export default DetailFood;
