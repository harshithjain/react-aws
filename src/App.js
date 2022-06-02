import React from 'react';
import './App.css';
import Footer from './components/ui/Footer.js';
import Header from './components/ui/Header.js';
import Main from './components/containers/Main.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;