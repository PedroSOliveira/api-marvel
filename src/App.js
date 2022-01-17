// import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from './pages/home';
import { MapPage } from "./pages/map";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
