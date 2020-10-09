/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
  TextInput,
  FlatList,
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

const DetailFood= ({ route }) => {

  const {food, title} = route.params;

  function changeLike(){
    console.log('+++'+food.love);
    if(food.love === 0){
      food.love = 1;
    }else{
      food.love = 0;
    }
    console.log(food.love);
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
            <View style={styles.shareButton}>
            <Pressable
              onPress={changeLike}>
              <Image style={styles.icons} source={require('../images/like.png')} />
              </Pressable>
            </View>
            <View style={styles.likeButton}>
              <Image style={styles.icons} source={require('../images/share.png')} />
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
          <Text style={styles.textDescription}>{`Ingredients \nfor ${food.servings} serving`}</Text> 
            {/* <ScrollView>  */}
              {food.ingredients.map( (r, index) =>
                <View  style={styles.ingView} key={index}>
                  <Text style={styles.ingredients}>{r.ingredient}</Text>
                  <Text style={styles.ingredients2}> {r.quantity}</Text>
                </View>
              )}              
            {/* </ScrollView> */}
        </View>  
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
      height: 50,
      position: 'relative',
      width: 50,
    },
    shareButton: {     
      height: 50,
      width: 50,
    },
    likeButton: {
      height: 50,
      width: 50,

    },
    icons: {
      height: 30,
      width: 30,
      tintColor: '#fff',
    },
    cerrar: {
      height: 20,
      width: 20,
    },
    trendingFood: {
      opacity: .4,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width,
      zIndex: 0,
    },
    viewDetail: {
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
    ingredients: {
      marginTop: 30,
      color: 'white',
      top: -50,
      fontSize: 15,
      marginLeft: -10,
      borderColor: 'white',
      borderStyle: 'solid',
      borderBottomWidth: .2,
      paddingBottom: 18,
      marginRight: -10,
    },
    ingredients2: {
      textAlign: 'right',
      marginTop: 30,
      color: 'white',
      top: -120,
      fontSize: 15,
      marginLeft: -10,
      borderColor: 'white',
      borderStyle: 'solid',
      borderBottomWidth: .2,
      paddingBottom: 18,
      marginRight: -10,
    },
    ingView: {
      margin: 35
    },
    scrollView: {
      backgroundColor: Colors.lighter,
    },
  });

export default DetailFood;
