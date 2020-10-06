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
                  <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Welcome' }}
                  />
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

  export default HomeScreen;