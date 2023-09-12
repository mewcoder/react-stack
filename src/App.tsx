import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./router/routes";

function App() {
  return (
    <>
      <nav style={{ margin: 10 }}>
        {/* <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link> */}
      </nav>
      <Router>
        <Routes />
      </Router>
    </>
  );
}
export default App;
