import React from 'react';

import RealmDatabase from './store/database/RealmDatabase';
import Home from './src/screens/Home';

const {RealmProvider} = RealmDatabase;

const App = () => {
  return (
    <RealmProvider>
      <Home />
    </RealmProvider>
  );
};

export default App;
