import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllPosts from "./components/Posts/AllPosts";
import PostDetail from "./components/Posts/PostDetail";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Switch>
            <Route path="/" exact component={AllPosts} />
            <Route path={"/:post_id"} component={PostDetail} />
            {/*  
            <Route path="/product/:product_id" component={ProductDetail} />
            <Route path="/signin" component={SigIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/basket" component={Basket} />
             <Route path="*" component={Error404} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
