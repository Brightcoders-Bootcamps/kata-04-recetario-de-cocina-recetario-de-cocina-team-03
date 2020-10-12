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
import styles from './styles/stylesHome';
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


