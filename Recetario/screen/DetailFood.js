/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
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

  const {food, title,foodArr, setFood} = route.params;

  const [isShowingText, setIsShowingText] = useState(food.love);

  function changeLike(){
    console.log('+++'+food.love);
    if(food.love == "0"){
      food.love = "1";
    }else{
      food.love = "0";
    }
    console.log(food.love);
  }

  function changeLike2(){
    var index = foodArr.findIndex(x=> x.id === food.id);
    let g = foodArr[index];
    console.log('+++'+food.love);
    if(food.love == "0"){
      food.love = "1";      
    }else{
      food.love = "0";
    }
    console.log(food.love);
    g = food;
    setFood([
      ...foodArr.slice(0,index),
      g,
      ...foodArr.slice(index+1)
    ]
            );
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

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#282828',
      height: Dimensions.get('window').height,
    },
    topBar: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: -50,
      zIndex: 5,
    },
    leftButton:{
      
    },
    rightButtons:{
      flexDirection: 'row-reverse',     
    },
    backButton: {
      paddingLeft: 20,
      paddingTop: 20,
      height: 50,
      position: 'relative',
      width: 50,
    },
    shareButton: {     
      paddingTop: 20,
      height: 50,
      width: 50,
    },
    likeButton: {
      height: 50,
      width: 50,
      paddingTop:20
    },
    icons: {
      height: 30,
      width: 30,
      tintColor: '#fff',
    },
    iconLike: {
      height: 25,
      width: 25,
      tintColor: '#fff',
    },
    iconShare: {
      height: 25,
      width: 35,
      tintColor: '#fff',
    },
    cerrar: {
      height: 20,
      width: 20,
    },
    trendingFood: {
      opacity: .4,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height / 2,
    },
    viewDetail: {
      flex: 1,
      position: 'absolute', 
      top: 0, 
      bottom: 0, 
      left: 0, 
      right: 0,
    },
    textDetail: {
      top: -90,
      textAlign: "left",
      color: 'white',
      marginBottom: 8,
      fontSize: 20,
      marginLeft: 20,
    },
    textName: {
      top: -90,
      textAlign: "left",
      color: 'white',
      fontSize: 25,
      marginLeft: 20,
      
    },
    textDescription: {
      color: 'white',
      top: -50,
      fontSize: 20,
      marginLeft: 20,
      lineHeight: 30,
    }, 
    textServings:{
      color: 'white',
      top: -50,
      fontSize: 15,
      marginLeft: 20,
      lineHeight: 30,
    },
    ingredients: {
      marginTop: 15,
      color: 'white',
      top: -50,
      fontSize: 15,
      marginLeft: -10,
      borderColor: 'darkgrey',
      borderStyle: 'solid',
      borderBottomWidth: .4,
      paddingBottom: 18,
      marginRight: -10,
    },
    ingredients2: {
      textAlign: 'right',
      marginTop: 28,
      color: 'white',
      top: -120,
      fontSize: 15,
      marginLeft: -10,
      paddingBottom: 15,
      marginRight: -10,
    },
    ingView: {
      margin: 35,
      marginBottom: -100, 
    },
    scrollView: {
      marginTop: (Dimensions.get('window').height / 2) + 100,
    },
  });

export default DetailFood;
