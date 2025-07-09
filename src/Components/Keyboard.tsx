import { useState } from "react";

type keyBoardProps = {
  disabled?: boolean
  activeLetter: string[]
  inActiveLetter: string[]
  addguessedletter: (letter: string) => void
}

const Keyboard = ({ activeLetter, inActiveLetter, addguessedletter, disabled = false }: keyBoardProps) => {
  const KEY = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const [isdisabled, setIsDisabled] = useState(false)


  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] gap-2 ">
      {KEY.map((key) => {
        const inActive = activeLetter.includes(key)
        const isInActive = inActiveLetter.includes(key)
        return (
          <button
            onClick={() => addguessedletter(key)}
            disabled={inActive || isInActive || disabled}
            className={`${"w-full p-1 cursor-pointer hover:bg-blue-300 focus:bg-blue-400 focus:text-white border-black border-4 text-2xl font-semibold uppercase"}  ${activeLetter && "  active:text-white active:bg-blue-500"} ${isInActive && " bg-gray-300 text-white cursor-not-allowed border-white "} ${"in-active:opacity-0.3"}`}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
