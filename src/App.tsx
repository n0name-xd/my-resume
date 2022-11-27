import React from 'react';
import './App.css';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
