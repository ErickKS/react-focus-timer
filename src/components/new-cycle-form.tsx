import { useContext } from "react";
import { useFormContext } from "react-hook-form";

import { CyclesContext } from "../context/cycles-context";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 w-full text-sm font-medium">
      <label htmlFor="task">I will work in</label>
      <input
        type="text"
        id="task"
        autoComplete="off"
        disabled={!!activeCycle}
        className="flex flex-1 items-center h-9 px-3 bg-transparent border border-gray rounded-lg outline-none transition-all focus:border-white"
        {...register("task")}
      />

      <label htmlFor="minutesAmount">for</label>
      <input
        type="number"
        id="minutesAmount"
        min={1}
        max={60}
        disabled={!!activeCycle}
        className="flex items-center h-9 w-12 bg-transparent border border-gray rounded-lg text-center outline-none transition-all focus:border-white placeholder:text-transparent"
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutes</span>
    </div>
  );
}
