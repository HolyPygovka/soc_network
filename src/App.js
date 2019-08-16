import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';

function App(props) {
  return (
    <div className="app_wrapper">
      <Header />
      <Navbar navbarState={props.store.getState().siteBar} />
      <div className="app_wrapper_content">
        <Route path='/dialogs' render={ () => <Dialogs store={props.store} /> } />
        <Route path='/profile'  render={ () => <Profile state={props.state.profilePage}
          dispatch={props.dispatch} /> }/>
        <Route path='/news' render={ () => <News/> }/>
        <Route path='/music' render={ () => <Music/> }/>
        <Route path='/settings' render={ () => <Settings/> }/>
      </div>
    </div>
  );
}

export default App;
