import './App.css';
import { Routes, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import PrivateRoute from './components/PrivateRoute';



function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<PrivateRoute/>}/>
      <Route exact path='/' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
