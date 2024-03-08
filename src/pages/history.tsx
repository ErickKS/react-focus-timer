import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";

import { CyclesContext } from "../context/cycles-context";

import { TaskStatus } from "../components/task-status";

export function HistoryPage() {
  const { cycles } = useContext(CyclesContext);

  return (
    <div className="flex-1 flex flex-col p-14">
      <h1 className="text-2xl">My history</h1>

      <div className="flex-1 overflow-auto mt-8">
        <table className="min-w-[600px] w-full">
          <thead className="bg-zinc-700 text-left leading-relaxed border-collapse">
            <tr>
              <th className="p-4 rounded-tl-lg">Task</th>
              <th className="p-4">Duration</th>
              <th className="p-4">Date</th>
              <th className="p-4 rounded-tr-lg">Status</th>
            </tr>
          </thead>

          <tbody className="bg-zinc-800 text-sm text-left leading-relaxed ">
            {cycles.map((cycle) => (
              <tr key={cycle.id} className="[&>td]:border-t-4 [&>td]:border-zinc-900">
                <td className="w-1/2 p-4">{cycle.task}</td>
                <td className="p-4">{cycle.minutesAmount}</td>
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
    </div>
  );
}
