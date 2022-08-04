import Matter from 'matter-js';
import {Dimensions} from 'react-native';
import Computer from './components/Computer';
import Field from './components/Field';
import Player from './components/Player';
import Puck from './components/Puck';
import Wall from './components/Wall';

export default (restart: any) => {
  const {height, width} = Dimensions.get('window');

  let engine = Matter.Engine.create({
    enableSleeping: false,
    velocityIterations: 16,
  });

  const wallThickness = 20;

  let {world} = engine;

  return {
    physics: {engine, world},
    field: Field(world),
    Puck: Puck(world, {x: width / 2, y: height / 2}),
    Player: Player(world, {x: width / 2, y: 500}),
    Computer: Computer(world, {x: width / 2, y: 200}),
    leftWall: Wall(
      world,
      {x: 0, y: height / 2},
      {width: wallThickness, height},
    ),
    rightWall: Wall(
      world,
      {x: width, y: height / 2},
      {width: wallThickness, height},
    ),
    bottomRightWall: Wall(
      world,
      {x: width - width / 8, y: height},
      {width: width / 4, height: wallThickness / 2},
    ),
    bottomLeftWall: Wall(
      world,
      {x: width / 8, y: height},
      {width: width / 4, height: wallThickness / 2},
    ),
    topLeftWall: Wall(
      world,
      {x: width / 8, y: 0},
      {width: width / 4, height: wallThickness / 2},
    ),
    topRightWall: Wall(
      world,
      {x: width - width / 8, y: 0},
      {width: width / 4, height: wallThickness / 2},
    ),
  };
};
