import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import RealmDatabase from '../../store/database/RealmDatabase';
import DeviceInfo from 'react-native-device-info';

const {useRealm} = RealmDatabase;

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const realm = useRealm();
  const [loads, setLoads] = useState([]);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    marginTop: StatusBar.currentHeight || 0,
  };

  const writeInRealm = () => {
    const id = Math.floor(Math.random() * 1000).toString();
    try {
      realm.write(() => {
        realm.create('Load', {
          id: id,
          loadKey: `${id}0`,
        });
      });

      setLoads(prevLoads => [
        ...prevLoads,
        ...[
          {
            id: id,
            loadKey: `${id}0`,
          },
        ],
      ]);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getLoads();
  }, []);

  const getLoads = async () => {
    const resultLoads = realm.objects('Load');
    setLoads(prevLoads => [...prevLoads, ...resultLoads]);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Header />
      <View
        style={{
          flex: 1,
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Button onPress={writeInRealm} title={'Write in realm'} />

        <FlatList
          data={loads}
          keyExtractor={item => item.id}
          renderItem={({index, item}) => (
            <View style={{backgroundColor: 'green', flex: 1}}>
              <Text style={{color: 'white'}}>
                {index} - {item.id}
              </Text>
            </View>
          )}
        />

        <Text style={{textAlign: 'center'}}>
          App Version: {DeviceInfo.getVersion()}
        </Text>
      </View>
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
