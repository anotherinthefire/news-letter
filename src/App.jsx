import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Newsletter } from "./pages/Newsletter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Newsletter />} />
      </Routes>
    </Router>
  );
}

export default App;
