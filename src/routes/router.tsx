import { LayoutMain } from "@/layouts/layout-main";
import { Signin } from "@/pages/auth/signin";
import { Panel } from "@/pages/panel";
import { NewProject } from "@/pages/projects/new-project";
import { NewTestCase } from "@/pages/tests/new-test-case";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />

        <Route element={<LayoutMain />}>
          <Route path="/panel" element={<Panel />} />

          <Route path="/projects/new" element={<NewProject />} />

          <Route path="/testcases/new" element={<NewTestCase />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
