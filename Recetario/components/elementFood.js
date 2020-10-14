import * as React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image, 
    Pressable,
} from 'react-native';
import styles from '../styles/stylesHome';


const ElementFood = (props) => {
    const {foodArr, navigation, setFood} = props;

    return (
      <ScrollView horizontal={true}>
        {foodArr.map( r =>
          { if (r.love == '0'){
            return (
              <View style={styles.containerCard} key={r.id}>             
                <Pressable
                      onPress={() => {
                        navigation.navigate('DetailFood', { food: r, title: 'Trending', foodArr:foodArr,setFood:setFood });
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

  export default ElementFood;