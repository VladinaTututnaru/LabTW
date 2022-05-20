import React from 'react';
import './App.css';
import LayoutContent from "./components/Layout";
import {Overview} from "./components/Overview";
import rootStore from './mst/Provider.store';


function App() {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="App">
        <LayoutContent
        />
        <Overview students={rootStore.students}
        />
        <button onClick={rootStore.saveToLocalStorage}>Save to LocalStorage</button>
        <br />
        <button onClick={rootStore.clearLocalStorage}>Clear LocalStorage</button>
        <br />
        <button onClick={rootStore.setLocalStorageTestData}>Set LocalStorage test data</button>
        <br />
        <button onClick={refreshPage}>Click to reload!</button>
    </div>
  );
}

export default App;
