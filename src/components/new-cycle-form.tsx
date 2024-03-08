import { useContext } from "react";
import { useFormContext } from "react-hook-form";

import { CyclesContext } from "../context/cycles-context";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 w-full text-lg font-semibold">
      <label htmlFor="task">I will work in</label>
      <input
        type="text"
        id="task"
        list="task-suggestions"
        disabled={!!activeCycle}
        placeholder="Give your project a name"
        className="flex flex-1 items-center gap-2 h-10 p-2 bg-transparent border-b-2 border-[#7C7C8A] text-center outline-none focus:border-purple-600 placeholder:text-[#7C7C8A]"
        {...register("task")}
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
        disabled={!!activeCycle}
        className="flex items-center gap-2 h-10 w-16 p-2 bg-transparent border-b-2 border-[#7C7C8A] text-center outline-none focus:border-purple-600 placeholder:text-[#7C7C8A]"
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutes</span>
    </div>
  );
}
