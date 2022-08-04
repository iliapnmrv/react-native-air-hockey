import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const image = '../../assets/images/logo.png';

const Logo = () => {
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Image
        source={require(image)}
        style={{width: '100%'}}
        resizeMode="cover"
      />
    </View>
  );
};

export default Logo;
