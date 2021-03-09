import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Navbar from "./navbar/navbar"
import Welcome from "./welcome/welcome"
import Preloader from "./preloader/preloader"
import Login from "./login/login"
import Register from "./register/register"

//CONTEXT
import { AppProvider } from "./contextService/contextservice"

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/Register" component={Register} exact></Route>
          <Route path="/" component={Navbar}></Route>
          <Route path="/" component={Welcome} exact></Route>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
