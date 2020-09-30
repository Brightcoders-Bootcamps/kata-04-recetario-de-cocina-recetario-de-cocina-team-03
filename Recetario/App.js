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
  Img,
  Form, 
  TextInput
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
      name: 'hola',
      description: 'comida rapida',
      servings: '3',
      love: '0',
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
  
 

  const ElementFood = (props) => {
    return (
      <View>
        <Text style={styles.sectionTitle}>Imagen Aquí!</Text>
        <Text style={styles.sectionTitle}>{props.name}!</Text>
        <Text style={styles.sectionTitle}>Description</Text>
      </View>
    );
  }

  const inpSearch = () => {
    let text="buscar"
    return (
      <View>
        <TextInput
                style={{ height: 40, borderColor: 'white', borderWidth: 1 }}
                value={text}
        />
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
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>              
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
              {/* <Input type="text" placeholder="What do you want to eat?"/> */}  
              {/* <inpSearch />            */}
              <TextInput
                style={{ height: 40, borderColor: 'white', borderWidth: 1 }}
                value="da"
              />
              <Text style={styles.sectionTitle}>TRENDING!</Text>
              <ElementFood name='Pizza' />
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
    backgroundColor: Colors.black,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
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
});

export default App;
