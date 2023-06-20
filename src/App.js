import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Feedback from "./component/Feedback";
import Header from "./component/Header";
import TextForm from "./component/TextUtils";
import PsdManager from "./component/PsdManager";
import PsdGenerator from "./component/PsdGenerator";
import Alert from "./component/Alert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <BrowserRouter>
      <Header />
      <Alert alert={alert} />
      <Routes>
        <Route exact path={"/"} element={<Home />} />

        <Route
          exact
          path="/TextForm"
          element={
            <TextForm
              showAlert={showAlert}
              heading="Try Textutils-Word counter , Character counter"
            />
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
