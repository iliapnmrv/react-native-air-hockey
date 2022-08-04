import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IScore {
  computer: number;
  player: number;
}

export type ScoreAction = 'computer' | 'player';

interface MainState {
  name: string;
  score: IScore;
  isUserAgree: boolean;
  coins: number;
  inventory: Array<string>;
  field: string;
}

const initialState: MainState = {
  name: '',
  score: {
    player: 0,
    computer: 0,
  },
  isUserAgree: false,
  coins: 70500,
  inventory: ['neon'],
  field: 'neon',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setName: (state: MainState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setIsAgree: (state: MainState, action: PayloadAction<boolean>) => {
      state.isUserAgree = action.payload;
    },
    setCoins: (state: MainState, action: PayloadAction<number>) => {
      state.coins = action.payload;
    },
    buyField: (state: MainState, action: PayloadAction<string>) => {
      state.inventory = [...state.inventory, action.payload];
      state.field = action.payload;
    },
    setField: (state: MainState, action: PayloadAction<string>) => {
      state.field = action.payload;
    },
    setScore: (state: MainState, action: PayloadAction<ScoreAction>) => {
      state.score[action.payload] = state.score[action.payload] + 1;
    },
    gameRestart: (state: MainState, action: PayloadAction<null>) => {
      state.score = {
        computer: 0,
        player: 0,
      };
    },
  },
});

export const {
  setName,
  setIsAgree,
  setCoins,
  buyField,
  setField,
  setScore,
  gameRestart,
} = mainSlice.actions;

export default mainSlice.reducer;
