import React, {useState, useEffect} from "react";
import "./App.css";
import SizeContextProvider from "./screenContext/contextProvider";
import AuthFile from "./components/auth/screens/authFile";
import NewPassword from "./components/auth/screens/newPassword";
import HomeScreen from "./components/home/home";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./components/loader/loading";
import { State } from "./common/interface/interface";

function App() {
  const selector = useSelector((state: State) => state.user);
  const [showLoading, setshowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowLoading(false);
    }, 2000);
  }, []);

  if(showLoading) {
    return <Loader />
  }
  

  return (
    <div className="App">
      <SizeContextProvider>
        <Routes>
          {selector.firstName === "" || selector.lastName === "" ? (
            <>
              <Route path="/" element={<AuthFile />} />
              <Route path="/reset-password/:token" element={<NewPassword />} />
            </>
          ) : (
            <>
              <Route path="/" element={<HomeScreen />} />
            </>
          )}
        </Routes>
      </SizeContextProvider>
    </div>
  );
}

export default App;
