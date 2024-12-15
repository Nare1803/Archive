import { useState } from 'react';
import './App.css';
import { TimerList } from './components/timer-list';
import { KillList } from './components/kill-list';

function App() {
  const [timers, setTimers] = useState([]);
  const [killed, setKilled] = useState([]);

  const handleRemove = (id, timeEnd) => {
    setTimers(timers.filter(timer => {
      if (timer.id === id) {
        const totalDuration = calculateDuration(timer.creationTime, new Date());
        setKilled([
          ...killed,
          {
            id,
            timeStart: formatTime(timer.creationTime),
            timeEnd,
            duration: totalDuration,
          },
        ]);
        return null;
      }
      return timer;
    }));
  };

  const handleRestore = (id) => {
    const timerToRestore = killed.find(item => item.id === id);
    setKilled(killed.filter(item => item.id !== id));
    setTimers([
      ...timers,
      { id: timerToRestore.id, creationTime: new Date() },
    ]);
  };

  const createTimer = () => {
    setTimers([...timers, { id: Date.now(), creationTime: new Date() }]);
  };

  const calculateDuration = (startTime, endTime) => {
    const diff = Math.floor((endTime - startTime) / 1000); // Difference in seconds
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;
    return `${minutes}m ${seconds}s`;
  };

  const formatTime = (date) => {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  return (
    <>
      <div className="p-4">
        <button
          onClick={createTimer}
          className="bg-red-300 px-4 py-2 rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Create
        </button>
        <div className="flex flex-row gap-6 mt-4">
          <TimerList
            timers={timers}
            onDelete={handleRemove}
            className="flex-1 border border-gray-300 p-4 rounded-md"
          />
          <KillList
            killed={killed}
            onRestore={handleRestore}
            className="flex-1 border border-gray-300 p-4 rounded-md"
          />
        </div>
      </div>
    </>
  );
}

export default App;
