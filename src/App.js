import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import TrackShipmentPage from "./pages/TrackShipmentPage";



function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<TrackShipmentPage />} />
      </Route>
    </Routes>
  );
}

export default App;
