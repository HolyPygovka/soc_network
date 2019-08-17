import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <div className="app_wrapper">
      <Header />
      <Navbar />
      <div className="app_wrapper_content">
        <Route path='/dialogs' render={ () => <DialogsContainer /> } />
        <Route path='/profile'  render={ () => <Profile /> }/>
        <Route path='/news' render={ () => <News/> }/>
        <Route path='/music' render={ () => <Music/> }/>
        <Route path='/settings' render={ () => <Settings/> }/>
      </div>
    </div>
  );
}

export default App;
