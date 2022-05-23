import './App.css';
import { Routes, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import PrivateRoute from './components/PrivateRoute';
import TravelSurvey from './pages/Quiz';



function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<PrivateRoute/>}/>
      <Route exact path='/' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/quiz" element={<TravelSurvey />} />
      </Routes>
    </>
  );
}

export default App;
