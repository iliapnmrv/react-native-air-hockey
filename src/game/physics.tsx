import Matter, {MouseConstraint} from 'matter-js';
import {TouchEvent} from 'react';
import {Dimensions, NativeTouchEvent} from 'react-native';
import {TimeUpdate, TouchEventType} from 'react-native-game-engine';

type Props = {
  touches: Array<{type: TouchEventType} & {event: NativeTouchEvent}>;
  time: TimeUpdate;
  dispatch: any;
};

const {width, height} = Dimensions.get('window');

let previousTouch: any;

const Physics = (entities: any, {touches, time, dispatch}: Props) => {
  let {engine} = entities.physics;

  engine.world.gravity.y = 0;

  const puck = entities.Puck.body;
  const player = entities.Player.body;
  const computer = entities.Computer.body;
  const force = 0.01;
  const paddleClamp = 0.05;

  touches
    .filter(t => t.type === 'move')
    .map(t => {
      let movementX = 0,
        movementY = 0;

      if (previousTouch) {
        // be aware that these only store the movement of the first touch in the touches array
        movementX = t.event.pageX - previousTouch.pageX;
        movementY = t.event.pageY - previousTouch.pageY;
        const vector = {
          x: movementX * force,
          y: movementY * force,
        };

        // Matter.Body.applyForce(player, player.position, vector);
      }
      Matter.Body.setPosition(player, {
        x: t.event.pageX,
        y: t.event.pageY,
      });

      previousTouch = t.event;
    });

  // function handleBeforeUpdate() {
  //   const clamp = 60;
  //   const clampedVelocity = puck.velocity;
  //   if (puck.velocity.X > clamp) {
  //     clampedVelocity.x = clamp;
  //   }
  //   if (puck.velocity.y > clamp) {
  //     clampedVelocity.y = clamp;
  //   }

  //   Matter.Body.setVelocity(puck, clampedVelocity);
  //   clampPaddlePosition(player);
  //   clampPaddlePosition(computer);
  // }

  // function clampPaddlePosition(paddle: any) {
  //   const projectedX = paddle.position.x + paddle.velocity.x;
  //   const projectedY = paddle.position.y + paddle.velocity.y;
  //   if (projectedX > 512) {
  //     Matter.Body.setPosition(paddle, {x: 512, y: paddle.position.y});
  //   }
  //   if (projectedX < 64) {
  //     Matter.Body.setPosition(paddle, {x: 64, y: paddle.position.y});
  //   }
  //   if (projectedY > 904) {
  //     Matter.Body.setPosition(paddle, {x: paddle.position.x, y: 904});
  //   }
  //   if (projectedY < 64) {
  //     Matter.Body.setPosition(paddle, {x: paddle.position.x, y: 64});
  //   }
  // }

  if (entities.Puck.body.bounds.max.y < 5) {
    dispatch({type: 'player_score'});
  }

  if (entities.Puck.body.bounds.min.y > height) {
    dispatch({type: 'computer_score'});
  }

  Matter.Engine.update(engine, time.delta);

  return entities;
};
export default Physics;
