import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Feedback from "./component/Feedback";
import Header from "./component/Header";
import TextForm from "./component/TextUtils";
import PsdManager from "./component/PsdManager";
import PsdGenerator from "./component/PsdGenerator";

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
        <Route exact path={"/psdManager"} element={<PsdManager />} />
        <Route exact path={"/feedback"} element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
