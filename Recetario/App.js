/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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

  var data = [
    {
      id: '1',
      name: 'Peperonni Pizza Pockets',
      description: 'Fast food',
      servings: '3',
      love: '0',
      image: './images/1.jpg',
      ingredients: [
        {
          ingredient: 'milk',
          quantity: '1 onze',
        },
        {
          ingredient: 'milk',
          quantity: '1 onze',
        },
      ],
    },
    {
      id: '2',
      name: 'hamburguesa',
      description: 'comida rapida',
      servings: '3',
      love: '0',
      image: './images/2.jpg',
      ingredients: [
        {
          ingredient: 'milk',
          quantity: '1 onze',
        },
      ],
    },
    {
      id: '3',
      name: 'Meatball Sub Bake',
      description: 'Familiar food',
      servings: '3',
      love: '0',
      image: './images/3.jpg',
      ingredients: [
        {
          ingredient: 'refrigerated biscuit',
          quantity: '1 tube',
        },
        {
          ingredient: 'frozen mini meatballs',
          quantity: '24',
        },
        {
          ingredient: 'marinada sauce',
          quantity: '1 jar',
        },
        {
          ingredient: 'sherdded mozzarella cheese',
          quantity: '2cup',
        },

      ],
    },
    {
      id: '4',
      name: 'Classic Waffles',
      description: '',
      servings: '3',
      love: '0',
      image: './images/3.jpg',
      ingredients: [
        {
          ingredient: 'all-purpose flour',
          quantity: '2 cup',
        },
        {
          ingredient: 'salt',
          quantity: '1 teaspoon',
        },
        {
          ingredient: 'baking powder',
          quantity: '4 teaspoons',
        },
        {
          ingredient: 'white sugar',
          quantity: '2 tablespoons',
        },
        {
          ingredient: 'eggs',
          quantity: '2',
        },
        {
          ingredient: 'warm milk',
          quantity: '1 1/2',
        },
        {
          ingredient: 'butter melted',
          quantity: '1/3 cup',
        },
        {
          ingredient: 'vanilla extract',
          quantity: '1 teaspoon',
        },
      ],
    },

  ];

  function showIngredients() {
    console.log(data);
  }

  
  const numColumns = 3;
  const renderItem = ({ r }) => {
    return (
      <View style={styles.containerCard} key={r.id}>
          <Image  style={styles.foodCard} source={require(`./images/1.jpg`)} />
          <Text style={styles.sectionTitle}>{r.image}</Text>
          <Text style={styles.sectionTitle}>{r.name}</Text>
          <Text style={styles.sectionTitle}>{r.description}</Text>
      </View>
    );
  };

  const ListFood = (prop) => {
    return (
      <FlatList
          data={data}
          style={styles.card}
          renderItem={this.renderItem}
          numColumns={3}
      />
    );
  }
  
  const ElementFood = (props) => {
    return (
      <View style={styles.card}>
        {data.map( r =>
        <View style={styles.containerCard} key={r.id}>
          <Image  style={styles.foodCard} source={require('./images/1.jpg')} />
          <Text style={styles.sectionTitle}>{r.name}</Text>
          <Text style={styles.sectionTitle}>{r.description}</Text>
         </View>
        )} 
      </View>
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
              {/* <ElementFood /> */}
              <ListFood />
              <Text style={[styles.recent]}>RECENT!</Text>
              <Button
                onPress={showIngredients}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
    marginTop: 15,
  },
  foodCard: {
    width: 100, height: 100
  },
  containerCard: {
    marginRight: 20,
    aspectRatio: 1,
    flex: 1 / 3
  }
});

export default App;
