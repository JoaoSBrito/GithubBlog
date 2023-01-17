import { useContext } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { CompletePost } from "./pages/CompletePost";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<CompletePost />} />
    </Routes>
  );
}
