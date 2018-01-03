/* Core */
import 'config/ReactotronConfig';
import React from 'react';

/* Redux */
import { Provider } from 'react-redux';
import store from 'store';

import Account from 'pages/account';

const App = () => (
  <Provider store={store} >
    <Account />
  </Provider>
);

export default App;
