import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Navbar from "./navbar/navbar"
import Welcome from "./welcome/welcome"
import Preloader from "./preloader/preloader"
import Login from "./login/login"
import Register from "./register/register"
import Dashboard from "./dashboard/dashboard";
import ProtectedRoute from "./protectedroute/protectedroute";

//CONTEXT
import { AppProvider } from "./contextService/contextservice"

function App() {
  let data = {}
  return (
    <>
      <AppProvider>
        <Router>
          <Route path="/" component={Navbar}></Route>
          <Switch>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/Register" component={Register} exact></Route>
            <Route path="/" component={Welcome} exact></Route>
            <ProtectedRoute path="/dashboard" component={Dashboard} exact data={data}></ProtectedRoute>
          </Switch>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
