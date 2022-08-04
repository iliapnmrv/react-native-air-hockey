import {
  Dimensions,
  GestureResponderEvent,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image as RNimage,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {fields} from '../constants/paddles';
import {GameEngine} from 'react-native-game-engine';
import entities from '../game/entities';
import Physics from '../game/physics';
import {
  gameRestart,
  ScoreAction,
  setCoins,
  setScore,
} from '../store/reducers/mainReducer';
import {store} from '../store/store';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

const arrowNext = require('../assets/images/arrow-next.png');
const winMessage = require('../assets/images/gameResults/win.png');
const defeatMessage = require('../assets/images/gameResults/defeat.png');
const resultContainer = require('../assets/images/gameResults/resultContainer.png');
const coinsImage = require('../assets/images/coins.png');

export const resultAmount = 50;

type Props = NativeStackScreenProps<RootStackParamList, 'Game', 'MyStack'>;

const Field = ({navigation}: Props) => {
  const {field, score, coins, name} = useAppSelector(state => state.main);

  const dispatch = useAppDispatch();
  const fieldSelected = fields.filter(item => item.name === field);
  const {width, height} = Dimensions.get('window');

  const [gameEngine, setGameEngine] = useState<GameEngine | null>(null);
  const [running, setRunning] = useState(false);
  const [resultMessage, setResultMessage] = useState<'win' | 'lose' | false>(
    false,
  );

  useEffect(() => {
    setRunning(true);
  }, []);

  const scoreHandler = (type: ScoreAction) => {
    dispatch(setScore(type));
  };

  const resultHandler = (amount: number) => {
    dispatch(setCoins(coins + amount));
    dispatch(gameRestart(null));
    setResultMessage(amount > 0 ? 'win' : 'lose');
  };

  return (
    <View style={styles.container}>
      <GameEngine
        ref={ref => setGameEngine(ref)}
        style={styles.container}
        systems={[Physics]}
        running={running}
        onEvent={(e: any) => {
          switch (e.type) {
            case 'computer_score':
              scoreHandler('computer');
              //@ts-ignore
              gameEngine.swap(entities(null));
              if (score.computer + 1 >= 5) resultHandler(-resultAmount);
              break;
            case 'player_score':
              scoreHandler('player');
              //@ts-ignore
              gameEngine.swap(entities(null));
              if (score.player + 1 >= 5) resultHandler(resultAmount);
              break;
            default:
              break;
          }
        }}
        entities={entities(null)}>
        <StatusBar hidden={true} />
        {resultMessage ? (
          <View
            style={{
              flex: 1,
              backgroundColor: '#00000080',
              justifyContent: 'center',
            }}>
            <ImageBackground
              source={resultContainer}
              resizeMode="contain"
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{height: 340, position: 'relative'}}>
                <Image
                  source={resultMessage === 'win' ? winMessage : defeatMessage}
                />
                <Text
                  style={[
                    styles.resultText,
                    {
                      paddingHorizontal: 20,
                    },
                  ]}>
                  {name}
                </Text>
                <View style={styles.coinsContainer}>
                  <Text style={[styles.resultText, {textAlign: 'center'}]}>
                    {resultMessage === 'win' ? resultAmount : -resultAmount}
                  </Text>
                  <Image source={coinsImage} resizeMode="cover" />
                </View>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Menu');
                    setResultMessage(false);
                    //@ts-ignore
                    gameEngine.swap(entities(null));
                  }}
                  style={{position: 'absolute', bottom: 20, right: -10}}>
                  <Image source={arrowNext} resizeMode="cover" />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        ) : null}
      </GameEngine>
    </View>
  );
};

export default Field;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  coinsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    color: 'white',
    fontFamily: 'Humnst777 BT',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 25,
    lineHeight: 30,
  },
});
