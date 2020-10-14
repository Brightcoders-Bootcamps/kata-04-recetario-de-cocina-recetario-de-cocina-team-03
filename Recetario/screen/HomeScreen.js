import 'react-native-gesture-handler';
import * as React from 'react';
import data from '../BDD/products';
import styles from '../styles/stylesHome';
import ElementFood from '../components/ElementFood';
import RecentFood from '../components/RecentFood';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, 
  TextInput,
  Pressable,
  RefreshControl,
} from 'react-native';

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
    const [text, setText] = React.useState('');
  
    React.useEffect( () => {
      setFood(filterItems(text));
    }, [text])
  
    const filterItems = query => {
      return data.filter((el) =>
        el.name.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
    }
  
    function search(){
      console.log(text);
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
                    <Pressable onPress={search}>        
                      <Image  style={styles.searchImage} source={require('../images/search.png')} />
                    </Pressable>
                    </View>
                    <TextInput
                      style={styles.textInput}
                      placeholder="What do you want to eat?"
                      placeholderTextColor="#fff"
                      onChangeText={text => setText(text)}
                      value={text}
                    />                     
                    <View style={styles.recordView}>                       
                      <Image  style={styles.searchImage} source={require('../images/recordvoice.png')} />
                    </View> 
                  </View>                
                  <Text style={[styles.trending]}>TRENDING</Text>
                  <ElementFood foodArr={foodArr} navigation={navigation} setFood={setFood}/> 
                  <Text style={[styles.recent]}>RECENT</Text>
                  <RecentFood Arrfood={foodArr} navigation={navigation} setFood={setFood}/>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
      </>
    );
  };

export default HomeScreen;