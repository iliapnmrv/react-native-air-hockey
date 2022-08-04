import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fields} from '../../constants/paddles';
import {useAppSelector} from '../../hooks/redux';
import Matter, {World} from 'matter-js';

const pauseIcon = '../../assets/images/pause.png';

const Field = (props: any) => {
  const {field, name, score} = useAppSelector(state => state.main);

  const fieldSelected = fields.filter(item => item.name === field);

  return (
    <ImageBackground
      source={fieldSelected?.[0]?.fieldBackground}
      resizeMode="cover"
      style={styles.image}>
      <ImageBackground
        source={fieldSelected?.[0]?.field}
        resizeMode="stretch"
        style={[styles.image, {width: '100%'}]}>
        <View>
          <Text
            style={[
              styles.userText,
              {
                transform: [{rotate: '180deg'}],
              },
              field === 'neon'
                ? {color: '#FFFFFF'}
                : {
                    color: '#DA4F4F',
                    backgroundColor: '#6C6C6C80',
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                  },
            ]}>
            Computer
          </Text>
        </View>
        <View style={styles.gameContainer}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              alignSelf: 'flex-start',
              marginLeft: 20,
              fontStyle: 'italic',
            }}>
            {score.computer} : {score.player}
          </Text>
          <View
            style={{
              backgroundColor: fieldSelected?.[0].lineColor,
              height: 4,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Image
              source={require(pauseIcon)}
              style={{alignSelf: 'flex-end', marginRight: 23}}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Text
            style={[
              styles.userText,
              field === 'neon'
                ? {color: '#FFFFFF'}
                : {
                    color: '#001AFF',
                    backgroundColor: '#6C6C6C80',
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                  },
            ]}>
            {name}
          </Text>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userText: {
    fontFamily: 'Humnst777 BT',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    marginTop: 8,
  },
  gameContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  footer: {
    height: 50,
    // marginBottom: 9,
  },
});

export default (world: World) => {
  const initialField = Matter.Bodies.rectangle(0, 0, 1, 1, {
    label: 'Field',
    isSensor: true,
    isStatic: true,
  });

  Matter.World.add(world, initialField);

  return {
    body: initialField,
    renderer: <Field />,
  };
};
