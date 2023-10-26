import {Routes, Route, useNavigationType, useLocation} from "react-router-dom";
import ChefPriveHomePage from "./pages/ChefPriveHomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ChefPriveHomePage />} />
    </Routes>
  );
}
export default App;
