import React from 'react';
import './App.css';

//import firebase js
import firebase from './firebase';
//components
import TimeList from './components/timeList';
import AddList from './components/addList';

// firebase.firestore().collection('times').add({
//   title: 'Novel Title 002',
//   time_seconds: 30

// })
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>React with Firebase</h3>
        <TimeList />
        <AddList />
      </header>
    </div>
  );
}

export default App;
