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
import DetailFood from './screen/DetailFood';
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
    borderWidth: 1
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
              navigation.navigate('DetailFood', { name: 'Jane' })
            }
          />  
         </View>
        )} 
      </ScrollView>
    );
  }

  function changeStatus(){
    console.log("Entro a cambio de estado");
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
                <Button
                  title="Next Screen"
                  onPress={() =>
                    navigation.navigate(DetailFood)
                  }
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
    </>
  );
};


