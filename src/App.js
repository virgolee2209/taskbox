import React from 'react';
import './App.css';
import InboxScreen from './component/InboxScreen';
import { Provider } from 'react-redux';
import store from './lib/reduxStore';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
