import { Outlet } from "react-router-dom";

import { Header } from "../components/header";

export function DefaultLayout() {
  return (
    <div className="flex flex-col gap-14 h-[calc(75vh-10rem)] max-w-6xl mt-10 mx-auto p-10 bg-zinc-900 rounded-lg">
      <Header />

      <Outlet />
    </div>
  );
}
