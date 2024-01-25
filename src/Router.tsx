import { Routes, Route } from "react-router-dom";

import { Other } from "./pages/Others";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/error/NotFound";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/other" element={<Other />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
