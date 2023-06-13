import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Feedback from "./component/Feedback";
import Tools from "./component/Tools";
import Header from "./component/Header";
import PsdManager from "./component/PsdManager";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/tools"} element={<Tools />} />
        <Route exact path={"/psdManager"} element={<PsdManager />} />
        <Route exact path={"/feedback"} element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
