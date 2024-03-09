import { Outlet } from "react-router-dom";

import { Header } from "../components/header";

export function DefaultLayout() {
  return (
    <div className="flex flex-1 h-screen justify-center items-center gap-12 md:px-5">
      <div className="relative flex flex-col gap-16 min-h-[584px] max-w-6xl w-full py-32 px-10 bg-black/85 backdrop-blur-sm transition-all md:rounded-xl">
        <Header />

        <Outlet />

        <a
          href="https://github.com/ErickKS/react-focus-timer"
          target="_blank"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm font-medium underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
