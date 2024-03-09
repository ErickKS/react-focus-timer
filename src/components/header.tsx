import { Timer, ScrollText } from "lucide-react";
import { NavLink } from "react-router-dom";

import clsx from "clsx";

export function Header() {
  return (
    <header className="absolute top-10 left-1/2 -translate-x-1/2 flex p-1 w-fit bg-gray rounded-lg">
      <NavLink
        to="/"
        title="timer"
        className={clsx(
          "flex justify-center items-center gap-2 h-8 px-4 rounded-md ring-2 ring-transparent outline-none transition-all",
          "text-sm text-gray-light font-medium",
          "aria-[current=page]:bg-black aria-[current=page]:text-white",
          "focus-visible:ring-white hover:text-white"
        )}
      >
        <Timer size={18} />
        Timer
      </NavLink>

      <NavLink
        to="/history"
        title="history"
        className={clsx(
          "flex justify-center items-center gap-2 h-8 px-4 rounded-md ring-2 ring-transparent outline-none transition-all",
          "text-sm text-gray-light font-medium",
          "aria-[current=page]:bg-black aria-[current=page]:text-white",
          "focus-visible:ring-white hover:text-white"
        )}
      >
        <ScrollText size={18} />
        History
      </NavLink>
    </header>
  );
}
