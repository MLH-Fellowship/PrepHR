// React related imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

// Urls
import * as allPaths from './constants/paths';

//Pages
import NotFoundPage from './pages/404/404';
import BeforeLoginPage from './pages/beforeLogin';
import AfterLoginPage from './pages/afterLogin';
import QuestionsPage from './pages/questions';
import ResultsPage from './pages/results';
import DashboardPage from './pages/dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={allPaths._beforeLoginPagePath} component={BeforeLoginPage} />
          <Route exact path={allPaths._afterLoginPagePath} component={AfterLoginPage} />
          <Route exact path={allPaths._questionsPagePath} component={QuestionsPage} />
          <Route exact path={allPaths._resultsLoginPagePath} component={ResultsPage} />
          <Route exact path={allPaths._dashboardPagePath} component={DashboardPage} />
          <Route exact path={allPaths._404PagePath} component={NotFoundPage} />
          <Redirect to={allPaths._404PagePath} />
        </Switch>
      </Router>
    );
  }
}

export default App;
