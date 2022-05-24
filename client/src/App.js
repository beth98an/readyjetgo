import './App.css';
import { Routes, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import PrivateRoute from './components/PrivateRoute';
import TravelSurvey from './pages/Quiz';
import Results from './pages/Results';
import Lobby from './pages/Lobby';



function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<PrivateRoute />} />
        <Route exact path='/home' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/quiz" element={<TravelSurvey />} />
        <Route path="/result" element={<Results />} />
        <Route path="/lobby" element={<Lobby />} />
      </Routes>
    </>
  );
}

export default App;
