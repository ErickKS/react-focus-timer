import { useContext, useEffect } from "react";
import { differenceInSeconds } from "date-fns";

import { CyclesContext } from "../context/cycles-context";

export function Countdown() {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate));

        if (secondDifference >= totalSeconds) {
          markCurrentCycleAsFinished();

          setSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished, setSecondsPassed]);

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAMount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAMount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [activeCycle, minutes, seconds]);

  return (
    <div className="flex gap-4 font-['Roboto_Mono'] text-[10rem] leading-[8rem]">
      <span className="bg-zinc-800 py-8 px-4 rounded-lg">{minutes[0]}</span>
      <span className="bg-zinc-800 py-8 px-4 rounded-lg">{minutes[1]}</span>

      <div className="flex justify-center w-16 py-8 text-purple-600 overflow-hidden">:</div>

      <span className="bg-zinc-800 py-8 px-4 rounded-lg">{seconds[0]}</span>
      <span className="bg-zinc-800 py-8 px-4 rounded-lg">{seconds[1]}</span>
    </div>
  );
}
