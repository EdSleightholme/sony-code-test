import React from 'react';

import './App.scss';
import logo from '../../assets/images/logo.svg';
import { ListItem } from '../../components/listitem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Start creating your TODO app here</h1>
              <p>
                Edit <code>src/containers/App/App.js</code> and save to reload.
              </p>

              <ListItem title={"title"} done={false} toDelate={()=>{}} />


            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
