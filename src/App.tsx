import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { COMPONENTS, DEFAULT_PATH } from "./routes.ts";
import { Main } from "./pages/main/Main.tsx";
import NotFound from "./pages/notFound/NotFount.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={DEFAULT_PATH} element={<Main />} />
        <Route path={COMPONENTS} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
