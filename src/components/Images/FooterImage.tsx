import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const gameSmall = '../../assets/images/gamesmall.png';

const FooterImage = () => {
  return (
    <View style={styles.footer}>
      <Image
        source={require(gameSmall)}
        style={{width: '100%'}}
        resizeMode="cover"
      />
    </View>
  );
};

export default FooterImage;

const styles = StyleSheet.create({
  footer: {
    height: 230,
    display: 'flex',
    flexDirection: 'row',
  },
});
