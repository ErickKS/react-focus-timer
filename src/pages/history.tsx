import { TaskStatus } from "../components/task-status";

export function HistoryPage() {
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
            <tr className="[&>td]:border-t-4 [&>td]:border-zinc-900">
              <td className="w-1/2 p-4">Tarefa</td>
              <td className="p-4">25 min</td>
              <td className="p-4">2 months ago</td>
              <td className="p-4">
                <TaskStatus status="in-progress" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
