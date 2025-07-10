import { useCallback, useEffect, useState } from "react";
import words from "./WordList.json";
import HangmanDrawing from "./Components/HangmanDrawing";
import HangmanWords from "./Components/HangmanWords";
import Keyboard from "./Components/Keyboard";
import { useDispatch, useSelector } from "react-redux";
import {wordGuess} from "./Redux/Slices/Slice"
import type { RootState } from "./Redux/Store";
const App = () => {

  const word = useSelector((state : RootState) => state.words.getword)
  const dispatch = useDispatch()





  const getword = () => words[Math.floor(Math.random() * words.length)]

  const [wordToGuess, setWordToGuess] = useState(getword);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isloser = incorrectLetters.length >= 7;
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))

  const addguessedletter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isWinner || isloser) return
    setGuessedLetters(curletters => [...curletters, letter])
  }, [guessedLetters, isWinner, isloser])


  useEffect(() => {

    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!/^[a-z]$/.test(key)) return
      e.preventDefault()
      addguessedletter(key)

    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [addguessedletter])





  useEffect(() => {

    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (key !== "Enter") return
      setWordToGuess(getword())
      e.preventDefault()
      setWordToGuess(getword())

    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [getword])



  return (
    <div className="max-w-[800px] top-20 flex flex-col gap-[2rem] mx-auto items-center ">
      <div className="text-2xl text-center ">
        {isWinner && 'Winner! - Refresh To Try Again'}
        {isloser && 'Nice Try - Refresh To Try Again'}
      </div>
       
<center>
        <h1>Word: {word[0]} </h1>
        <button className="bg-green-300 rounded-2xl p-4 text-2xl font-bold" onClick={() => dispatch(wordGuess())}>Generate Word</button>
      </center>










       
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWords Reveal={isloser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div className="self-stretch">
        <Keyboard
          disabled={isWinner || isloser}

          activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inActiveLetter={incorrectLetters}
          addguessedletter={addguessedletter}
        />
      </div>
    </div>
  );
};

export default App;
