// App.jsx
import {
  createBrowserRouter as createRouter,
  Link,
  RouterProvider,
  useNavigate,
  Outlet,
} from "react-router-dom";

// home page
function Home() {
  return <h1>Home</h1>;
}

// about page
function About() {
  return <h1>About</h1>;
}

// nav component
function Nav() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/task">about</Link>
      <Link to="/about">about</Link>
    </div>
  );
}

function Nav2() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>home</button>
      <button onClick={() => navigate("/about")}>about</button>
    </div>
  );
}

const AppLayout = () => (
  <>
    <Nav />
    <Nav2 />
    <Outlet />
  </>
);

const routes = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

const router = createRouter(routes);

// https://stackoverflow.com/questions/75783646/react-routerprovider-with-context-api-not-working
// https://stackoverflow.com/questions/70220413/error-usehref-may-be-used-only-in-the-context-of-a-router-component-it-wor
function App() {
  return <RouterProvider router={router} />;
}

export default App;

// https://stackoverflow.com/questions/65425884/react-router-v6-error-useroutes-may-be-used-only-in-the-context-of-a-route
