import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../hooks/redux';
import {generalStyles} from '../styles/general';
import BackgroundImage from '../components/Images/BackgroundImage';
import MenuButton from '../components/Menu/MenuButton';
import FooterImage from '../components/Images/FooterImage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import Coins from '../components/Coins/Coins';

const settingText = '../assets/images/settingText.png';
const startText = '../assets/images/startText.png';
const shopText = '../assets/images/shopText.png';

type Props = NativeStackScreenProps<RootStackParamList, 'Menu', 'MyStack'>;

const Menu = ({navigation}: Props) => {
  const {name, coins} = useAppSelector(state => state.main);

  return (
    <BackgroundImage>
      <Text style={[generalStyles.mainText, {marginBottom: 21}]}>
        Hi, {name}
      </Text>
      <Coins amount={coins} />
      <View style={{marginTop: 35}}>
        <MenuButton
          image={require(startText)}
          onPress={() => navigation.navigate('Game')}
        />
        <MenuButton
          image={require(shopText)}
          onPress={() => navigation.navigate('Shop')}
        />
        <MenuButton
          image={require(settingText)}
          onPress={() => {
            navigation.navigate('Greeting');
          }}
        />
      </View>
      <FooterImage />
    </BackgroundImage>
  );
};

export default Menu;

const styles = StyleSheet.create({});
