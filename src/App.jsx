import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const user = useSelector((state) => state.user);
  const currentUser = useSelector((state) => state.user.currentUser);
  const fetching = useSelector((state) => state.user.isFetching);
  // const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log("this is fetching  ", fetching);
    console.log("--user obj on navigation--", user);
    console.log("--current obj on navigation--", currentUser);
  }, [fetching, user]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">
          <Login />
          {/* {fetching ? <Redirect to="/" /> : <Login />} */}
        </Route>
        <Route path="/register">
          <Register />
          {/* {fetching ? <Redirect to="/" /> : <Register />} */}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
