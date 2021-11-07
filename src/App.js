import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllPosts from "./components/Posts/AllPosts";
import PostDetail from "./components/Posts/PostDetail";
function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <div id="content">
          <Switch>
            <Route path="/gelecek-varlik-hr/" exact component={AllPosts} />
            <Route
              path={"/gelecek-varlik-hr/:post_id"}
              component={PostDetail}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
