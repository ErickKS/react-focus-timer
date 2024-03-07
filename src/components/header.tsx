import { Timer, ScrollText } from "lucide-react";
import { NavLink } from "react-router-dom";

import clsx from "clsx";

export function Header() {
  return (
    <header className="flex justify-center items-center gap-5">
      <NavLink
        to="/"
        title="timer"
        className={clsx(
          "flex justify-center items-center size-10 border-y-2 border-y-transparent text-[#E1E1E6] transition-all",
          "hover:border-b-purple-600 hover:text-purple-600 aria-[current=page]:text-purple-600"
        )}
      >
        <Timer size={24} />
      </NavLink>

      <NavLink
        to="/history"
        title="historic"
        className="flex justify-center items-center size-10 border-y-2 border-y-transparent text-[#E1E1E6] transition-all hover:border-b-purple-600 hover:text-purple-600 aria-[current=page]:text-purple-600"
      >
        <ScrollText size={24} />
      </NavLink>
    </header>
  );
}
