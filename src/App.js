import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Home-body/Body';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import './index.sass';


class App extends Component {
    render() {
        return (
          <div>
            <Navbar/>
            <Sidebar/>
            <Body/>
            <Footer/>
          </div>
        );
      }
}

export default App;
