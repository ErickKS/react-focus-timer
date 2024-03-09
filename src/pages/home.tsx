import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";

import { CyclesContext } from "../context/cycles-context";

import { NewCycleForm } from "../components/new-cycle-form";
import { Countdown } from "../components/countdown";
import { Button } from "../components/button";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number().min(1, "The cycle must be a minimum of 5 minutes").max(60, "The cycle must be a maximum of 60 minutes"),
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
  const minutesAmount = watch("minutesAmount");
  const isSubmitDisabled = !task || !minutesAmount;

  return (
    <main className="relative flex flex-1 justify-center items-center">
      <form onSubmit={handleSubmit(handleCreateNewTask)} className="flex-1 flex flex-col items-center gap-16">
        <div className={clsx("transition-all duration-75", { "opacity-0": activeCycle })}>
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
        </div>

        <div className="flex justify-between items-center gap-2 w-full">
          <img src="./lines.svg" alt="" />

          <Countdown />

          <img src="./lines.svg" alt="" />
        </div>

        {activeCycle ? (
          <Button type="button" onClick={interruptCurrentCycle} variant="secondary">
            Interrupt
          </Button>
        ) : (
          <Button type="submit" disabled={isSubmitDisabled} variant="primary">
            Start
          </Button>
        )}
      </form>
    </main>
  );
}
