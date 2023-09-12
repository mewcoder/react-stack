import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Task from "./views/task";
import About from "./views/about";
import MainLayout from "./components/main-layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/task" element={<Task />}></Route>
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
