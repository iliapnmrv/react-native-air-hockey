import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {generalStyles} from '../../styles/general';

type Props = {
  image: any;
  onPress: Function;
};

const MenuButton = ({image, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={[generalStyles.mainButton, styles.mainButtonImage]}
      activeOpacity={0.7}
      onPress={() => onPress()}>
      <Image source={image} resizeMode="cover" />
    </TouchableOpacity>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  mainButtonImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
});
