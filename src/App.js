import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import PsdGenerator from "./pages/PsdGenerator";
import PsdManager from "./pages/PsdManager";
import Feedback from "./pages/Feedback";
import TextForm from "./pages/TextUtils";

import Crypt from "./pages/Crypt";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path={"/"} element={<Home />} />

        <Route
          exact
          path="/TextForm"
          element={
            <TextForm heading="Try Textutils-Word counter , Character counter" />
          }
        />
        <Route exact path={"/psdGenerator"} element={<PsdGenerator />} />
        <Route exact path={"/crypt"} element={<Crypt />} />

        <Route exact path={"/psdManager"} element={<PsdManager />} />
        <Route exact path={"/feedback"} element={<Feedback />} />
      </Routes>
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
