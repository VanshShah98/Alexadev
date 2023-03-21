
import './App.css';
import Navbar from './component/Navbar'
import Login from './component/Login'
import Signup from './component/Signup'
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";*/

function App() {
  return (
    <>
    <Navbar/>
    <Login/>
    <Signup/>
    </>
  );
}

export default App;
