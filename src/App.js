import { mainStyle } from "./style";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
function App() {
  return (
    <div css={mainStyle}>
      <Router>
        <Routes>
          <Route path="/:index" element={<Details />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
