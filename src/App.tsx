
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.lazy';
import Account from './components/Account/Account.lazy';
import Home from './components/Home/Home.lazy';

function App() {
  return (
    <Router>
      <div data-testid="App">
        <nav>
          <ul>
            <li>
              <NavLink to="/" >Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/home" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/account" >Account</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
