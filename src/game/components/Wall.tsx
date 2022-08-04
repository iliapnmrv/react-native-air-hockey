import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fields} from '../../constants/paddles';
import {useAppSelector} from '../../hooks/redux';
import Matter, {World} from 'matter-js';

type IObjectPosition = {
  x: number;
  y: number;
};

type IObjectSize = {
  width: number;
  height: number;
};

const Wall = (props: any) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  return (
    <View
      style={{
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
        // backgroundColor: 'white',
      }}
    />
  );
};

export default (world: World, pos: IObjectPosition, size: IObjectSize) => {
  const initialWall = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: 'Wall',
      isStatic: true,
      chamfer: {radius: 10},
    },
  );

  Matter.World.add(world, initialWall);

  return {
    body: initialWall,
    pos,
    renderer: <Wall />,
  };
};

const styles = StyleSheet.create({});
