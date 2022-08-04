import {ImageSourcePropType} from 'react-native';

type IField = {
  name: string;
  paddleRed: ImageSourcePropType;
  paddleBlue: ImageSourcePropType;
  field: ImageSourcePropType;
  fieldBackground: ImageSourcePropType;
  puck: ImageSourcePropType;
  lineColor: string;
  price: number;
};

export const fields: IField[] = [
  {
    name: 'neon',
    paddleBlue: require('../assets/images/paddles/paddleNeonBlue.png'),
    paddleRed: require('../assets/images/paddles/paddleNeonRed.png'),
    field: require('../assets/images/fields/fieldNeon.png'),
    fieldBackground: require('../assets/images/fields/fieldNeonBackground.png'),
    puck: require('../assets/images/pucks/puckNeon.png'),
    lineColor: 'rgba(255, 255, 255, 0.1)',
    price: 70500,
  },
  {
    name: 'classic',
    paddleBlue: require('../assets/images/paddles/paddleClassicBlue.png'),
    paddleRed: require('../assets/images/paddles/paddleClassicRed.png'),
    field: require('../assets/images/fields/fieldClassic.png'),
    fieldBackground: require('../assets/images/fields/fieldClassicBackground.png'),
    puck: require('../assets/images/pucks/puckClassic.png'),
    lineColor: '#FFF',
    price: 70500,
  },
  {
    name: 'no light',
    paddleBlue: require('../assets/images/paddles/paddleNoLightBlue.png'),
    paddleRed: require('../assets/images/paddles/paddleNoLightRed.png'),
    field: require('../assets/images/fields/fieldNoLight.png'),
    fieldBackground: require('../assets/images/fields/fieldNoLightBackground.png'),
    puck: require('../assets/images/pucks/puckNoLight.png'),
    lineColor: 'rgba(255, 255, 255, 0.1)',
    price: 70500,
  },
];
