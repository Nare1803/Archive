import { KillItem } from './kill-item';

export const KillList = ({ killed, onRestore }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md border border-gray-700">
      <table className="w-full text-left text-sm text-white border-collapse border border-gray-700">
        <thead className="bg-gray-700 text-gray-300">
          <tr>
            <th className="px-4 py-2 border border-gray-600">ID</th>
            <th className="px-4 py-2 border border-gray-600">Time Start</th>
            <th className="px-4 py-2 border border-gray-600">Time End</th>
            <th className="px-4 py-2 border border-gray-600">Overall Duration</th>
            <th className="px-4 py-2 border border-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-600">
          {killed.map(item => (
            <KillItem
              key={item.id}
              {...item}
              onRestore={onRestore}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
