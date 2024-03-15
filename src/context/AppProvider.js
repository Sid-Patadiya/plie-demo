import React from 'react';
import {AppContext} from './AppContext';
import UserState from './UserContext';

const AppProvider = props => (
  <AppContext.Provider value={{}}>
    <UserState>{props.children}</UserState>
  </AppContext.Provider>
);

export default AppProvider;
