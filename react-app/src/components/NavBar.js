import React from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {

  const user = useSelector(state => state.session.user);
  // const user_initial = user.username.split('')[0].toUpperCase()
  const profile_icon_violet = require('../frontend-assets/profile_icon_violet.png')

  let links;
  if(user){
    links = (
      <>
        <div className="flex-container">
          {/* <div>logo</div> */}
          {/* <div></div> */}
          <div>
            <NavLink className="nav-link" to="/" exact={true} activeClassName="active"> Home </NavLink>
            <NavLink className="nav-link" to="/users" exact={true} activeClassName="active"> Users </NavLink>
          </div>
          <div>
            <LogoutButton />
          </div>
          <img style={{ 'width': '30px', 'paddingLeft': '10px' }} src={profile_icon_violet}></img>
          {/* <p style={{ 'position': 'relative', 'left': '-20px' }}>{user_initial}</p> */}
        </div>
      </>
    )
  } else {
    links = (
      <>
        {/* <NavLink className="nav-link" to="/login" exact={true} activeClassName="active">Login</NavLink>
        <NavLink className="nav-link" to="/sign-up" exact={true} activeClassName="active">Sign Up</NavLink> */}
      </>
    )
  }
  return (
    <nav>
        { links }
    </nav>
  );
}

export default NavBar;
