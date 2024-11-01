export default function Rules() {
  return (
    <div className="flex justify-center ">
      <div className="w-[700px] h-[150px] flex flex-col gap-4 mt-10 bg-red-100 p-3 rounded">
        <h1 className="text-xl font-bold">How to play dice game</h1>
        <div>
          <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>
              After click on dice if selected no is equal to dice number you
              will get same point as dice
            </li>
            <li>If you get wrong guess then 2 points will be deducted</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
 