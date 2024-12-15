import { useEffect, useRef, useState } from "react";

export const Timer = ({ id, onDelete }) => {
    const [minute, setMinute] =  useState(new Date().getMinutes());
    const [second,setSecond] = useState(new Date().getSeconds());
    const [isAlive, setIsAlive] = useState(true)

    let interval = useRef(null)
    useEffect(() => {
      if(isAlive){
        interval.current =  setInterval(() => {
          setSecond(second => second == 0 ? 59 : second - 1)
        }, 300)
      }else{
        clearInterval(interval.current)
      }

      return () => clearInterval(interval.current)
    }, [isAlive])

    useEffect(() => {
      if(second == 59){
        setMinute(minute => minute - 1)
      }
    }, [second])

    return (
      <div className="bg-gray-800 p-4 rounded-md shadow-md border border-gray-700">
        <p className="text-white text-sm font-semibold mb-2">Timer #{id}</p>
        <h2 className="text-pink-400 text-2xl font-bold mb-4">
          {minute}:{second}
        </h2>
        <div className="flex gap-2">
          <button 
              onClick={() => setIsAlive(false)}
              disabled={!isAlive}
              className="bg-purple-400 disabled:opacity-40 text-white px-4 py-2 rounded-md hover:bg-purple-500 transition duration-200">
            Pause
          </button>
          <button
              onClick={() => setIsAlive(true)}
              disabled={isAlive} 
              className="bg-pink-500 disabled:opacity-30 disabled:cursor-progress text-white px-4 py-2 rounded-md hover:bg-pink-400 transition duration-200">
            Continue
          </button>
          <button 
            onClick={() => onDelete(id, minute+":"+second)}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-200">
            Delete
          </button>
        </div>
      </div>
    );
  };
