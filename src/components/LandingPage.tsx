import { useNavigate } from "react-router-dom";

export default function LandingPage(){
    const navigate = useNavigate();
    function handleClick(){
        navigate("/play-ground");
    }

    return <div>
        <div className="flex my-[50px] mx-[129px] w-full">
            <div className="w-[649px] h-[500px]">
                <img src={"/image/Dice.svg"} className="w-full h-full object-contain"/>
            </div>
            <div className="flex flex-col justify-center items-center p-1 gap-2">
                <div><h1 className="text-7xl font-bold">DICE GAME</h1></div>
                <button className="bg-stone-950 text-white py-1 px-5 flex-end rounded hover:bg-stone-800" onClick={handleClick}>Play Now</button>
            </div>
        </div>
    </div>
}