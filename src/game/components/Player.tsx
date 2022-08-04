import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fields} from '../../constants/paddles';
import {useAppSelector} from '../../hooks/redux';
import Matter, {World} from 'matter-js';

type IObjectPosition = {
  x: number;
  y: number;
};

const Player = (props: any) => {
  const {field} = useAppSelector(state => state.main);

  const fieldSelected = fields.filter(item => item.name === field);

  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  return (
    <Image
      source={fieldSelected[0].paddleBlue}
      style={{
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    />
  );
};

export default (world: World, pos: IObjectPosition) => {
  const initialPlayer = Matter.Bodies.circle(pos.x, pos.y, 40, {
    label: 'Player',
  });

  Matter.World.add(world, initialPlayer);

  return {
    body: initialPlayer,
    pos,
    renderer: <Player />,
  };
};

const styles = StyleSheet.create({});
