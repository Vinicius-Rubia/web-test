import { LayoutMain } from "@/layouts/layout-main";
import { Signin } from "@/pages/auth/signin";
import { Projects } from "@/pages/projects/projects";
import { NewTestCase } from "@/pages/tests/new-test-case";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />

        <Route element={<LayoutMain />}>
          {/* <Route path="/panel" element={<Panel />} /> */}

          <Route path="/projects" element={<Projects />} />

          <Route path="/testcases/new" element={<NewTestCase />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
