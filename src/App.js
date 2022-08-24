import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import HomeView from "./views/HomeView";
import FormView from "./views/FormView";
import TableView from "./views/TableView";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="table" element={<TableView />} />
        <Route path="form" element={<FormView />} />
      </Routes>
    </div>
  );
}

export default App;
