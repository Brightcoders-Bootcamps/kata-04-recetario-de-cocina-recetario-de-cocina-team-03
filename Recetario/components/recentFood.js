import * as React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import styles from '../styles/stylesHome';

const RecentFood = (props) => {
  let Arrfood = props.Arrfood;
  let navigation = props.navigation;
  let setFood = props.setFood;

  return (
    <ScrollView horizontal={true}>
      {Arrfood.map((r) => {
        if (r.love === '1') {
          return (
            <View style={styles.containerCardRecent} key={r.id}>
              <Pressable
                onPress={() => {
                  navigation.navigate('DetailFood', {
                    food: r,
                    title: 'Recent',
                    foodArr: Arrfood,
                    setFood: setFood,
                  });
                }}>
                <Image style={styles.foodCardRecent} source={r.image} />
                <Text style={styles.sectionTitleRecent}>{r.name}</Text>
                <Text style={styles.sectionTitleRecent}>{r.description}</Text>
              </Pressable>
            </View>
          );
        }
      })}
    </ScrollView>
  );
};

export default RecentFood;