
  const HEAD = (
    <div className="absolute top-[50px] right-[-25px] h-[60px] w-[60px] border-black rounded-full border-[10px]" />
  )

  const BODY = (
    <div className="absolute top-[110px] right-[0] h-[100px] w-[10px] bg-black " />
  )
  const RIGHT_ARM = (
    <div className="absolute top-[80px] right-[30px] h-[100px] w-[10px] bg-black -rotate-40 " />
  )
  const LEFT_ARM = (
    <div className="absolute top-[80px] right-[-30px] h-[100px] w-[10px] bg-black rotate-40 " />
  )
  const LEFT_LEG = (
    <div className="absolute top-[190px] right-[-30px] h-[100px] w-[10px] bg-black -rotate-40 " />
  )
  const RIGHT_LEG = (
    <div className="absolute top-[190px] right-[30px] h-[100px] w-[10px] bg-black rotate-40 " />
  )
 
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
 numberOfGuesses : number;
}

const HangmanDrawing = ( {numberOfGuesses} : HangmanDrawingProps ) => {

  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        className="h-[50px] w-[10px] bg-black top-0 right-0 absolute" />
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      <div className="h-[400px] w-[10px] bg-black ml-[120px]" />
      <div className="h-[10px] w-[250px] bg-black " />
    </div>
  );
};

export default HangmanDrawing;
