import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BackgroundImage from '../components/Images/BackgroundImage';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import Coins from '../components/Coins/Coins';
import {RootStackParamList} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {fields} from '../constants/paddles';
import {buyField, setCoins, setField} from '../store/reducers/mainReducer';

type Props = NativeStackScreenProps<RootStackParamList, 'Shop', 'MyStack'>;

const shopText = '../assets/images/shopText.png';
const arrowNext = '../assets/images/arrow-next.png';

const Shop = ({navigation}: Props) => {
  const {
    coins,
    field: fieldSelected,
    inventory,
  } = useAppSelector(state => state.main);

  const dispatch = useAppDispatch();

  const buyPaddleHandler = (name: string, price: number) => {
    dispatch(buyField(name));
    dispatch(setCoins(coins - price));
  };

  const selectPaddle = (name: string) => {
    dispatch(setField(name));
  };

  return (
    <BackgroundImage>
      <View style={styles.shopTopSection}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <Image
            source={require(arrowNext)}
            style={{transform: [{rotate: '180deg'}]}}
          />
        </TouchableOpacity>
        <Image source={require(shopText)} />
        <Coins amount={coins} />
      </View>
      <View>
        {fields.map((field, key) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={key}
            style={[
              styles.shopItem,
              field.name === fieldSelected ? styles.fieldSelected : null,
            ]}
            onPress={
              inventory.includes(field.name)
                ? () => selectPaddle(field.name)
                : field.price <= coins
                ? () => buyPaddleHandler(field.name, field.price)
                : undefined
            }>
            <View
              style={{
                width: '50%',
              }}>
              <Text style={styles.shopItemName}>
                {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
              </Text>
              <View style={styles.paddlesContainer}>
                <Image source={field.paddleBlue} />
                <Image source={field.paddleRed} />
              </View>
            </View>
            <View
              style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {inventory.includes(field.name) ? (
                <Text style={styles.selectText}>Select</Text>
              ) : (
                <View>
                  <Coins amount={70500} />
                  <Text style={styles.buyPaddleText}>BUY</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </BackgroundImage>
  );
};

export default Shop;

const styles = StyleSheet.create({
  shopTopSection: {
    width: 360,
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shopItem: {
    width: 325.37,
    height: 97.51,
    borderRadius: 47.5,
    borderWidth: 2,
    borderColor: '#5E00B8',
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shopItemName: {
    fontFamily: 'Humnst777 BT',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  paddlesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buyPaddleText: {
    fontFamily: 'Humnst777 BT',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 29,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  selectText: {
    fontFamily: 'Humnst777 BT',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 29,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  fieldSelected: {
    borderColor: '#E3CAFB',
  },
});
