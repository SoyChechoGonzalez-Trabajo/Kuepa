import React from 'react'
import './App.css'

import { Provider } from 'react-redux';

import LateralRightSide from './Components/LateralRightSide/LateralRightSide';
import LateralLeftSide from './Components/LateralLeftSide/LateralLeftSide';
import Main from './Components/Main/Main';

import { store } from './redux/store/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LateralLeftSide />
        <Main />
        <LateralRightSide />
      </div>
    </Provider>
  )
}

export default App
