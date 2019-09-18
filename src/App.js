import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import StartPage from "./views/StartPage";
import RecipePage from "./views/RecipePage";
import NewRecipePage from "./views/NewRecipePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/recept/:link" component={RecipePage} />
            <Route path="/lagg-till-recept" component={NewRecipePage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
