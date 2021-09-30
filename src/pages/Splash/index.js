import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PpDummy from '../../assets/image/ppdummy.png';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.background}>
      <Image source={PpDummy} style={styles.logo} />
      <Text>Contact APP</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 200,
    height: 200,
  },
});
