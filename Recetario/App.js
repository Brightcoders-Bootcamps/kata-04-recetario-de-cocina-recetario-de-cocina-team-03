/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import data from './BDD/products.json';
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

const App: () => React$Node = () => {

  function showIngredients() {
    console.log(data);
  }

  // const renderItem = ({ item }) => {
  //   console.log(item.id);
  //   let img = "./images/";
  //   let images = img.concat("",item.image);
  //   console.log(images);
  //   return (
  //     <View style={styles.containerCard} key={item.id}>
  //         {/* DUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}
  //         <Image style={styles.foodCard} source={require('./images/1.jpg')} />
  //         <Text style={styles.sectionTitle}>{item.name}</Text>
  //         <Text style={styles.sectionTitle}>{item.description}</Text>
  //     </View>
  //   );
  // };
  
  const ListFood = (prop) => {
    return (
      <FlatList
        data={data}
        style={styles.containerTest}
        renderItem={renderItem}
        numColumns={3}
      />
    );
  }
  
  const ElementFood = (props) => {
    return (
      <ScrollView horizontal={true}>
        {data.map( r =>
        <View style={styles.containerCard} key={r.id}>
          <Image  style={styles.foodCard} source={require('./images/1.jpg')} />
          <Text style={styles.sectionTitle}>{r.name}</Text>
          <Text style={styles.sectionTitle}>{r.description}</Text>
         </View>
        )} 
      </ScrollView>
    );
    
  }
  const RecentFood = (props) => {
    return(
      <ScrollView horizontal={true}>
        {data.map( r =>
          { if (r.status){
            return (
              <View style={styles.containerCard} key={r.id}>
                <Image style={styles.foodCard} source={require('./images/1.jpg')} />
                <Text style={styles.sectionTitle}>{r.name}</Text>
                <Text style={styles.sectionTitle}>{r.description}</Text>
              </View>
            )
          }}
        )} 
      </ScrollView>
    );    
  }


  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="What do you want to eat?"
              />
              <Text style={[styles.trending]}>TRENDING!</Text>
              <ElementFood />                         
              {/* <ListFood /> */}
              <Text style={[styles.recent]}>RECENT!</Text>
              <RecentFood />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  containerTest: {
    flex: 1,
    marginVertical: 20,
    marginBottom: -300,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#2c2c2c',
  },
  sectionContainer: {
    marginTop: 25,
    paddingHorizontal: 24,
  },
  textInput: {
    height: 40, 
    borderColor: 'white',
    borderWidth: 1
  },
  card: {
    height: 250,
    width:  100,
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  foodCard : {
    height: 100,
    width:  100,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.white,
    textAlign: "justify"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  trending: {
    fontSize: 24,
    color: 'deeppink',
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
  },
  recent: {
    fontSize: 24,
    color: 'deeppink',
    fontWeight: '600',
    marginBottom: 10,
  },
  containerCard: {
    marginRight: 20,
    marginBottom: 70,
    aspectRatio: 1,
    flex: 1
  },
  containerCardRecent:{
    flex: 1
  },
  foodCardRecent: {
    height: 170,
    width:  130,
    flex: 1,
    // flexDirection: 'row',
  }
});

export default App;