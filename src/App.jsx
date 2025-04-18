import { useState } from "react";
import DetailsPage from "./components/DetailsPage";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import SyleCard from "./components/StyleCard";
import SubmitForm from "./components/SubmitForm";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
