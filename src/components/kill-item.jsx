import PropTypes from 'prop-types';

export const KillItem = ({ id, timeStart, timeEnd, duration, onRestore }) => {
  return (
    <tr className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-b border-gray-600">
      <td className="px-4 py-2 border border-gray-600">{id}</td>
      <td className="px-4 py-2 border border-gray-600">{timeStart}</td>
      <td className="px-4 py-2 border border-gray-600">{timeEnd}</td>
      <td className="px-4 py-2 border border-gray-600">{duration}</td>
      <td className="px-4 py-2 border border-gray-600">
        <button
          onClick={() => onRestore(id)}
          className="bg-pink-600 hover:bg-purple-400 text-white px-3 py-1 rounded-md shadow-sm transition duration-200"
        >
          Restore
        </button>
      </td>
    </tr>
  );
};

KillItem.propTypes = {
  id: PropTypes.number.isRequired,
  timeStart: PropTypes.string.isRequired,
  timeEnd: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  onRestore: PropTypes.func.isRequired,
};
