import React, {useEffect} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import RealmDatabase from '../../store/database/RealmDatabase';

const {useRealm, useQuery, useObject} = RealmDatabase;

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const realm = useRealm();
  const resultLoads = realm.objects('Load');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const writeInReal = () => {
    const id = Math.random().toString();
    realm.write(() => {
      realm.create('Load', {
        id: id,
        loadKey: `${id}0`,
      });
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button onPress={writeInReal} title={'Write in realm'} />

          <View style={{backgroundColor: 'red', flex: 1}}>
            <FlatList
              data={resultLoads}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={{backgroundColor: 'green', flex: 1}}>
                  <Text style={{color: 'white'}}>{item.id}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;