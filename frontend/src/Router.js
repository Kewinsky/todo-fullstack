import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { MainTheme } from "./themes/MainTheme";
import { MainPage } from "./pages/MainPage";
import { MainLayout } from "./layouts/MainLayout";

function Router() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout pageTitle={"Todo List"}>
              <MainPage />
            </MainLayout>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default Router;
