import clsx from "clsx";
import { Play } from "lucide-react";

export function HomePage() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center">
      <form className="flex flex-col items-center gap-14">
        <div className="flex flex-wrap justify-center items-center gap-2 w-full text-lg font-semibold">
          <label htmlFor="task">I will work in</label>
          <input
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Give your project a name"
            className="flex flex-1 items-center gap-2 h-10 p-2 bg-transparent border-b-2 border-[#7C7C8A] text-center outline-none focus:border-purple-600 placeholder:text-[#7C7C8A]"
          />

          <datalist id="task-suggestions">
            <option value="projeto 1" />
            <option value="projeto 2" />
            <option value="projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">for</label>
          <input
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
            placeholder="00"
            className="flex items-center gap-2 h-10 w-16 p-2 bg-transparent border-b-2 border-[#7C7C8A] text-center outline-none focus:border-purple-600 placeholder:text-[#7C7C8A]"
          />

          <span>minutes</span>
        </div>

        <div className="flex gap-4 font-['Roboto_Mono'] text-[10rem] leading-[8rem]">
          <span className="bg-zinc-800 py-8 px-4 rounded-lg">0</span>
          <span className="bg-zinc-800 py-8 px-4 rounded-lg">0</span>

          <div className="flex justify-center w-16 py-8 text-purple-600 overflow-hidden">:</div>

          <span className="bg-zinc-800 py-8 px-4 rounded-lg">0</span>
          <span className="bg-zinc-800 py-8 px-4 rounded-lg">0</span>
        </div>

        <button
          type="submit"
          className={clsx(
            "flex items-center justify-center gap-2 h-16 w-full px-4 font-semibold bg-purple-600 rounded-lg transition-all",
            "disabled:cursor-not-allowed disabled:opacity-70",
            "hover:bg-purple-700"
          )}
        >
          <Play />
          Start
        </button>
      </form>
    </main>
  );
}
