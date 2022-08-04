import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  amount: number;
};

const coinsImage = '../../assets/images/coins.png';

const Coins = ({amount}: Props) => {
  return (
    <View style={styles.coinsContainer}>
      <Text style={{color: '#FFF', marginRight: 3}}>{amount}</Text>
      <Image source={require(coinsImage)} resizeMode="cover" />
    </View>
  );
};

export default Coins;

const styles = StyleSheet.create({
  coinsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
