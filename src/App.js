import "./App.css";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Cart from "./Pages/Cart/Cart";
import Category from "./Pages/Category/category";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import AuthLayout from "./Pages/Authentication/AuthLayout/AuthLayout";
import Layout from "./Pages/Admin/Admin-Layout/Layout";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import BeforeActivation from "./Pages/Admin/Account/BeforeActivation/BeforeActivation";
import Account from "./Pages/Admin/Account/Account Tab/Account";

function App() {


  return (
    <Router>
      {/* <NavBar /> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>

        <Route path="/category" exact>
          <Category />
        </Route>

        <Route path="/login" exact>
          <AuthLayout />
        </Route>

        <Route path="/admin" exact>
        <Layout/>
        </Route>

        <Route path="/dashboard" exact>
        <Dashboard/>
        </Route>

        <Route path="/activation" exact>
        <BeforeActivation/>
        </Route>

        <Route path="/account" exact>
        <Account/>
        </Route>

        <Route path="/activation" exact>
        <BeforeActivation/>
        </Route>

      </Switch>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
