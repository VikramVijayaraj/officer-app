import { useState } from "react";
import Acknowledge from "../Acknowledge";

export default function Action() {
  const [clicked, setClicked] = useState(false);

  function clickHandler(event) {
    console.log(event.target.innerHTML);
    setClicked(true);
  }

  return (
    <div className="flex justify-center py-8 space-x-8">
      <button
        onClick={clickHandler}
        className="border border-red-500 text-red-600 font-bold px-20 py-2 rounded-lg shadow-md cursor-pointer hover:bg-red-500 hover:text-white transition duration-200"
      >
        Reject
      </button>
      <button
        onClick={clickHandler}
        className="border border-green-500 text-green-600 font-bold px-20 py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-500 hover:text-white transition duration-200"
      >
        Accept
      </button>

      {clicked && <Acknowledge />}
    </div>
  );
}
