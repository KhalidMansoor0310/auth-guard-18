import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Home from './views/Home';
import Dashboard from "./views/Dashboard";
import MyOrders from "./views/MyOrders";
import Profile from "./views/Profile";
import Blog from "./views/Blog";
import Login from "./views/Login";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";

function App() {
  const isAuthenticated = false;
  const Header = () => {
    return <nav>
      <Link className="nav-link" to={'/'}>Home</Link>
      <Link className="nav-link" to={'/dashboard'}>Dashboard</Link>
      <Link className="nav-link" to={'/orders'}>Orders</Link>
      <Link className="nav-link" to={'/blogs'}>Blogs</Link>
      <Link className="nav-link" to={'/profile'}>Profile</Link>

    </nav>
  }
  return (
    <>
      <Router>
        <Header />

        {/* ONE WAY WHICH CONSUMES MORE LINE  */}
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated} >
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated}>
                <MyOrders />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/blogs"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated}>
                <Blog />
              </ProtectedRoutes>
            }
          />


          <Route path='/login' element={<Login />} />
        </Routes> */}
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated} adminRoute={true}>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/blogs" element={<Blog />} />

          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
