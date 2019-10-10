import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';

//COMPONENTS

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';

const App = () => { 
    return (
         <BrowserRouter>
            <div>
                <header>
                    <NavLink to="/">Home</NavLink><br/>
                    <NavLink 
                    to="/posts"
                    activeStyle={{color:'red'}}
                    activeClassName="selected"
                    >Posts</NavLink><br/>
                    <NavLink to="/profile">Profile</NavLink><br/>
                    <hr/>
                </header>
                <Route path="/" exact component={Home}/>
                <Route path="/posts" exact component={Posts}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/posts/:id/:username" component={PostItem}/>         
            </div>
         </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)