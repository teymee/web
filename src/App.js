import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from './Pages/Cart/Cart';

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/cart">
            <Cart />
          </Route>
    </Switch>
    </Router>
  );
}

export default App;
