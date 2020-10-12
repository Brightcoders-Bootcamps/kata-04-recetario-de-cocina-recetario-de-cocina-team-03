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
  RefreshControl,
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
          options={{
            headerShown: false,
            title: 'Recetario',
        }} 
        />
        <Stack.Screen name="DetailFood" 
          options={{
            headerShown: false,
          }} 
        component={DetailFood} />
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
  card: {
    height: 250,
    width:  100,
    flex: 1,
    flexDirection: 'row',
  },
  foodCard : {
    height: 100,
    width:  110,
    borderRadius: 10,
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
    marginTop: 20,
  },
  recent: {
    fontSize: 24,
    color: 'deeppink',
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 30,
  },
  containerCard: {
    width: 110,
    marginRight: 20,
    marginBottom: 40,
    aspectRatio: 1,
    flex: 1
  },
  containerCardRecent:{
    height: 300,
    marginRight: 70,
    width: 110,
  },
  containerInput: {
    flexDirection: 'row'
  },
  iconsInput:{
    color: '#fff'
  },
  searchImage: {
    tintColor: '#fff',
    height: 17,
    width: 17,
  },
  searchView: {
    justifyContent: 'center',
    backgroundColor: '#343435',
    paddingLeft: 10,
    paddingRight: 10,
    width: '10%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },  
  recordView: {
    justifyContent: 'center',
    backgroundColor: '#343435',
    paddingLeft: 10,
    paddingRight: 10,
    width: '10%',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },     
  textInput: {
    height: 40, 
    backgroundColor: '#343435',
    color: '#fff',
    paddingLeft: 8,
    width: '80%'
  },
});

export default App;

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const HomeScreen = ({ navigation }) => {

  const [refreshing, setRefreshing] = React.useState(false);
  
  const onRefresh = React.useCallback(() => {
      setRefreshing(true);
  
      wait(2000).then(() => setRefreshing(false));
    }, []);

  const [foodArr, setFood] = React.useState(data);
  
  const ElementFood = (props) => {
    return (
      <ScrollView horizontal={true}>
        {foodArr.map( r =>
          { if (r.love == '0'){
            return (
              <View style={styles.containerCard} key={r.id}>             
                <Pressable
                      onPress={() => {
                        navigation.navigate('DetailFood', { food: r, title: 'Trending', foodArr:foodArr,setFood: setFood });
                      }}>
                    <Image  style={styles.foodCard} source={r.image} />
                    <Text style={styles.sectionTitle}>{r.name}</Text>
                    <Text style={styles.sectionTitle}>{r.description}</Text>
                </Pressable>          
              </View>
            )
          }}
        )}
      </ScrollView>
    );
  }

  const RecentFood = (props) => {
    return(
      <ScrollView horizontal={true}>
        {data.map( r =>
          { if (r.love === '1'){
            return (
              <View style={styles.containerCardRecent} key={r.id}>
                <Pressable
                onPress={() => {
                  navigation.navigate('DetailFood', { food: r, title: 'Recent', foodArr:foodArr, setFood: setFood })
                }}>
                  <Image style={styles.foodCardRecent} source={r.image} />
                  <Text style={styles.sectionTitleRecent}>{r.name}</Text>
                  <Text style={styles.sectionTitleRecent}>{r.description}</Text>            
                </Pressable>              
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
            style={styles.scrollView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }

            >
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <View style={styles.containerInput}>
                  <View style={styles.searchView}>                       
                    <Image  style={styles.searchImage} source={require('./images/search.png')} />
                  </View>
                  <TextInput
                    style={styles.textInput}
                    placeholder="What do you want to eat?"
                    placeholderTextColor="#fff" 
                  />                     
                  <View style={styles.recordView}>                       
                    <Image  style={styles.searchImage} source={require('./images/recordvoice.png')} />
                  </View> 
                </View>                
                <Text style={[styles.trending]}>TRENDING</Text>
                <ElementFood />                      
                {/* <ListFood /> */}
                <Text style={[styles.recent]}>RECENT</Text>
                <RecentFood />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
    </>
  );
};


