import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from './Logo';

type Props = {
  children: React.ReactNode;
};

// backgroundImage

const image = '../../assets/images/backgroundImage.png';

const BackgroundImage = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(image)}
        resizeMode="cover"
        style={styles.image}>
        <Logo />
        {children}
      </ImageBackground>
    </View>
  );
};

export default BackgroundImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
