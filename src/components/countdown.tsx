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
    <div className="flex items-center gap-4">
      <div className="flex flex-col justify-center items-center size-32 p-4 border border-gray rounded-xl font-medium">
        <div className="flex text-center text-6xl leading-none">
          <span className="w-11">{minutes[0]}</span>
          <span className="w-11">{minutes[1]}</span>
        </div>

        <span className="text-sm text-gray-light">MIN</span>
      </div>

      <div className="relative -top-0.5 mx-1 text-xl font-bold">:</div>

      <div className="flex flex-col justify-center items-center size-32 p-4 border border-gray rounded-xl font-medium">
        <div className="flex text-center text-6xl leading-none">
          <span className="w-11">{seconds[0]}</span>
          <span className="w-11">{seconds[1]}</span>
        </div>

        <span className="text-sm text-gray-light">SEC</span>
      </div>
    </div>
  );
}
