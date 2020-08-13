import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import SignIn from './views/SignIn';
import ManageQuestions from './views/Manage/Questions';
import ManageQuestionsCreate from './views/Manage/Questions/Create';
import ManageQuestionsEdit from './views/Manage/Questions/Edit';

import { initAccount } from './actions/AccountActions';

const App = ({ initAccount }) => {
  useEffect(() => {
    initAccount();
  }, [initAccount]);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/manage/questions/create'>
            <ManageQuestionsCreate />
          </Route>
          <Route path='/manage/questions/edit/:id'>
            <ManageQuestionsEdit />
          </Route>
          <Route path='/manage/questions'>
            <ManageQuestions />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const mapsStateToProps = (state) => {
  return { account: state.account.account };
};

export default connect(mapsStateToProps, { initAccount })(App);
