/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import data from './BDD/products';
import recentProducts from './BDD/recent';
import DetailFood from './screen/DetailFood';
// import Icon from 'react-native-vector-icons/Ionicons';
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
  Pressable,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="DetailFood" component={DetailFood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#2c2c2c',
    height : Dimensions.get('window').height,
  },
  sectionContainer: {
    marginTop: 25,
    paddingHorizontal: 24,
  },
  textInput: {
    height: 40, 
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#343435',
    color: '#fff',
    paddingLeft: 8,
    width: '90%'
  },
  card: {
    height: 250,
    width:  100,
    flex: 1,
    flexDirection: 'row',
  },
  foodCard : {
    height: 100,
    width:  100,
    borderRadius: 15,
  },
  foodCardRecent : {
    height: 200,
    width: 150,
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.white,
    textAlign: "justify"
  },
  sectionTitleRecent: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'justify' 
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
    marginBottom: 40,
    aspectRatio: 1,
    flex: 1
  },
  containerCardRecent:{
    height: 300,
  },
  containerInput: {
    flexDirection: 'row'
  },
  iconsInput:{
    color: '#fff'
  }
});

export default App;

const HomeScreen = ({ navigation }) => {
  const ElementFood = (props) => {
    return (
      <ScrollView horizontal={true}>
        {data.map( r =>
        <View style={styles.containerCard} key={r.id}>
          <Image  style={styles.foodCard} source={r.image} />
          <Text style={styles.sectionTitle}>{r.name}</Text>
          <Text style={styles.sectionTitle}>{r.description}</Text>
          <Button
            title="Go to Jane's profile"
            onPress={() =>
              { updateProducts(r) },
              navigation.navigate('DetailFood', { food: r, title: 'Trending' })
            }
          />
         </View>
        )} 
      </ScrollView>
    );
  }

  function updateProducts(r){
    if(recentProducts.length === 3){
      recentProducts.pop();
      recentProducts.unshift(r);
    }else{
      recentProducts.unshift(r);
    }
  }

  const RecentFood = (props) => {
    return(
      <ScrollView horizontal={true}>
        {data.map( r =>
          { if (r.status){
            return (
              <View style={styles.containerCardRecent} key={r.id}>
                <Image style={styles.foodCardRecent} source={r.image} />
                <Text style={styles.sectionTitleRecent}>{r.name}</Text>
                <Text style={styles.sectionTitleRecent}>{r.description}</Text>
                <Button
                  title="Go to Jane's profile"
                  onPress={() =>
                  navigation.navigate('DetailFood', { food: r, title: 'Recent' })
                  }
                />
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
                <View style={styles.containerInput}>
                  <Text style={styles.iconsInput}>L</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="What do you want to eat???"
                    placeholderTextColor="#fff" 
                  />                  
                  {/* <Icon
                    name='ios-person'
                    color='#000'
                    size={14}
                  /> */}
                </View>                
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


