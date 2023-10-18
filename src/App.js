import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login } from "./components/login";
import { Home } from "./components/home";
import { Provider } from "react-redux";
import { store } from "./components/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
