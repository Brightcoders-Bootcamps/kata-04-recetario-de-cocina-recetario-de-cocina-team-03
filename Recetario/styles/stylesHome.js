import {   Dimensions, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


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

export default styles;