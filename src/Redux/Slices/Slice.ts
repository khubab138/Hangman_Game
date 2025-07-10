import { createSlice } from "@reduxjs/toolkit";
import words from '../../WordList.json'


type wordstates = {
  getword: string[];
};

const initialState: wordstates = {
  getword: [],
};

export const wordslice = createSlice({
  name: "getword",
  initialState,

  reducers: {

    wordGuess: (state) =>{
      const randWord = words[Math.floor(Math.random() * words.length)]
        state.getword = [randWord]
    }

  }
});

export const {wordGuess} =  wordslice.actions
export default wordslice.reducer

