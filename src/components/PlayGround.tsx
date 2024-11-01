import { useState } from "react";
import Rules from "./Rules";

export default function PlayGround() {
  const [score, setScore] = useState(0);
  const [selectNumber, setselectNumber] = useState(0);
  const [imgNo, setImgNo] = useState(Math.floor(Math.random()*6) + 1);
  const [rules, setRules] = useState(false);

  function handleClickImage(){
    const value = Math.floor(Math.random()*6)+ 1; 
    if(value == selectNumber){
        setScore(score + value);
    }
    else if(score == 0 || score == 1){
        setScore(0);
    } else {
        setScore(score - 2);
    }
    return setImgNo(value); 
  }

  function handleResetScore(){
    setScore(0);
  }

  function handleClickRule(){
    setRules(!rules);
  }

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between h-[98px] mx-10 mt-8">
        <div className="flex flex-col">
          <div className=" h-full flex text-7xl font-semibold justify-center">
            {score}
          </div>
          <h1 className="font-medium">Total Score</h1>
        </div>
        <div className="w-[450px] flex flex-col justify-between">
          <div className="flex justify-between ">
            <button
              className="w-[50px] h-[50px] border border-slate-950 font-bold"
              onClick={() => setselectNumber(1)}
              style={
                selectNumber == 1 ? { backgroundColor: "black", color: "white" } : {}
              }
            >
              1
            </button>
            <button
              className="w-[50px] h-[50px] border border-slate-950 font-bold"
              onClick={() => setselectNumber(2)}
              style={
                selectNumber == 2 ? { backgroundColor: "black", color: "white" } : {}
              }
            >
              2
            </button>
            <button
              className="w-[50px] h-[50px] border border-slate-950 font-bold"
              onClick={() => setselectNumber(3)}
              style={
                selectNumber == 3 ? { backgroundColor: "black", color: "white" } : {}
              }
            >
              3
            </button>
            <button
              className="w-[50px] h-[50px] border border-slate-950 font-bold"
              onClick={() => setselectNumber(4)}
              style={
                selectNumber == 4 ? { backgroundColor: "black", color: "white" } : {}
              }
            >
              4
            </button>
            <button
              className="w-[50px] h-[50px] border border-slate-950 font-bold"
              onClick={() => setselectNumber(5)}
              style={
                selectNumber == 5 ? { backgroundColor: "black", color: "white" } : {}
              }
            >
              5
            </button>
            <button
              className="w-[50px] h-[50px] border border-slate-950 font-bold"
              onClick={() => setselectNumber(6)}
              style={
                selectNumber == 6 ? { backgroundColor: "black", color: "white" } : {}
              }
            >
              6
            </button>
          </div>
          <div className="font-bold text-right">Select Number</div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 mt-10">
        <div>
          <div className="w-[160px] h-[160px]">
            <img onClick={handleClickImage}
              src={`/image/dice_${imgNo}.svg`}
              className="w-full h-full object-contain"
            />
          </div>
          <div>Click on the dice to roll</div>
        </div>
        <div className="flex flex-col w-[160px] gap-4">
          <button className="border-2 border-slate-950 w-full rounded-md p-1" onClick={handleResetScore}>
            Reset Score
          </button>
          <button className="bg-slate-950 text-white rounded-md p-1" onClick={handleClickRule}>
            Show Rules
          </button>
        </div>
      </div>
      {rules ? <Rules/> : null}
    </div>
  );
}
