import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { PauseOctagon, Play } from "lucide-react";

import { CyclesContext } from "../context/cycles-context";

import { NewCycleForm } from "../components/new-cycle-form";
import { Countdown } from "../components/countdown";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number().min(5, "The cycle must be a minimum of 5 minutes").max(60, "The cycle must be a maximum of 60 minutes"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function HomePage() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewTask(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <main className="flex-1 flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(handleCreateNewTask)} className="flex flex-col items-center gap-14">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <button
            type="button"
            onClick={interruptCurrentCycle}
            className={clsx(
              "flex items-center justify-center gap-2 h-16 w-full px-4 font-semibold bg-red-600 rounded-lg transition-all",
              "hover:bg-red-700"
            )}
          >
            <PauseOctagon />
            Interrupt
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className={clsx(
              "flex items-center justify-center gap-2 h-16 w-full px-4 font-semibold bg-purple-600 rounded-lg transition-all",
              "disabled:cursor-not-allowed disabled:opacity-70",
              "hover:bg-purple-700"
            )}
          >
            <Play />
            Start
          </button>
        )}
      </form>
    </main>
  );
}
