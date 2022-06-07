
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Application from "./components/Application";
import ApplicationDone from "./components/ApplicationDone";
import BusinessDetails from "./components/BusinessDetails";
import LoanDetails from "./components/LoanDetails";
import NotFound from "./components/NotFound";
import PersonalDetails from "./components/PersonalDetails";

function App() {



  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Application></Application>}>
          <Route path="/" index element={<PersonalDetails></PersonalDetails>}></Route>
          <Route path="businessDetails" element={<BusinessDetails></BusinessDetails>}></Route>
          <Route path="loanDetails" element={<LoanDetails></LoanDetails>}></Route>
        </Route>
        <Route path="/applicationDone" element={<ApplicationDone></ApplicationDone>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
