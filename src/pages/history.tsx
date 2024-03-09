import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";

import { CyclesContext } from "../context/cycles-context";

import { TaskStatus } from "../components/task-status";

export function HistoryPage() {
  const { cycles } = useContext(CyclesContext);

  return (
    <div className="flex-1 max-h-72 overflow-auto overflow-y-scroll">
      <table className="min-w-[600px] w-full ">
        <thead className="bg-black border-x border-x-white text-left border-collapse">
          <tr className="[&>th]:font-medium [&>th]:text-sm">
            <th className="p-4 rounded-tl-lg">Task</th>
            <th className="p-4">Duration</th>
            <th className="p-4">Date</th>
            <th className="p-4 rounded-tr-lg">Status</th>
          </tr>
        </thead>

        <tbody className="bg-black text-sm text-gray-light text-left font-medium leading-relaxed">
          {cycles.map((cycle) => (
            <tr key={cycle.id} className="bg-black border-x border-x-white [&>td]:border-t-4 [&>td]:border-transparent">
              <td className="w-1/2 p-4">{cycle.task}</td>
              <td className="p-4">{cycle.minutesAmount} min</td>
              <td className="p-4">{formatDistanceToNow(new Date(cycle.startDate), { addSuffix: true })}</td>

              <td className="p-4">
                {cycle.finishedDate && <TaskStatus status="concluded" />}

                {cycle.interruptedDate && <TaskStatus status="interrupted" />}

                {!cycle.finishedDate && !cycle.interruptedDate && <TaskStatus status="in-progress" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
