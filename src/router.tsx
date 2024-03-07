import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/default-layout";
import { HistoryPage } from "./pages/history";
import { HomePage } from "./pages/home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Route>
    </Routes>
  );
}
