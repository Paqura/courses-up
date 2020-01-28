import React from 'react';
import { Courses } from './components/Courses';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Courses />
    </Provider>
  );
};

export default App;
