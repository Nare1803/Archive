import { Timer } from "./timer"
import Types from 'prop-types'
export const TimerList = ({ timers, onDelete }) => {
    return (
      <div className="bg-gray-800 p-4 rounded-md shadow-md">
        {timers.map((timer) => (
        
           <Timer key={timer.id} id={timer.id} onDelete={onDelete} />
        ))}
      </div>
    ) 
  }


TimerList.propTypes = {
  onDelete: Types.func,
  timers: Types.arrayOf(Types.exact({
    id: Types.number
  }))
}
  