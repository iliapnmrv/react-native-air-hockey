import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackgroundImage from '../components/Images/BackgroundImage';
import FooterImage from '../components/Images/FooterImage';
import {setName} from '../store/reducers/mainReducer';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {generalStyles} from '../styles/general';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

const arrowNext = '../assets/images/arrow-next.png';

type Props = NativeStackScreenProps<RootStackParamList, 'Game', 'MyStack'>;

const Greeting = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const onChangeName = (name: string) => {
    dispatch(setName(name));
  };

  const {name} = useAppSelector(state => state.main);

  const goToMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <BackgroundImage>
      <View style={styles.contentContainer}>
        <Text
          style={[
            generalStyles.mainText,
            {
              marginVertical: 29,
            },
          ]}>
          Enter a name
        </Text>
        <TextInput
          style={[styles.input, generalStyles.mainButton]}
          onChangeText={onChangeName}
          value={name}
          textAlign={'center'}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{marginTop: 29.5}}
          onPress={goToMenu}>
          <Image source={require(arrowNext)} resizeMode="cover" />
        </TouchableOpacity>
      </View>
      <FooterImage />
    </BackgroundImage>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    fontFamily: 'Humnst777 Blk BT',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: 25,
    lineHeight: 31,
    color: '#FFFFFF',
  },
});
