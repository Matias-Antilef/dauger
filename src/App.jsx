import { BrowserRouter, Route, Routes } from "react-router-dom";
import MVP from "./components/MVP";
import AllProyect from "./views/AllProyect/AllProyect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AllProyect />} />
        <Route path={"/proyect"} element={<MVP />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
