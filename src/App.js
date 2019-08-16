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
      <Navbar navbarState={props.state.siteBar} />
      <div className="app_wrapper_content">
        <Route path='/dialogs' render={ () => <Dialogs dialogsState={props.state.dialogsPage} /> } />
        <Route path='/profile'  render={ () => <Profile profileState={props.state.profilePage}
          addPost={props.addPost}
          textareaChanges={props.textareaChanges} /> }/>
        <Route path='/news' render={ () => <News/> }/>
        <Route path='/music' render={ () => <Music/> }/>
        <Route path='/settings' render={ () => <Settings/> }/>
      </div>
    </div>
  );
}

export default App;
