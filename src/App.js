import "./App.css";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Cart from "./Pages/Cart/Cart";
import Category from "./Pages/Category/category";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import AuthLayout from "./Pages/Authentication/AuthLayout/AuthLayout";

function App() {


  return (
    <Router>
      <NavBar />
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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
