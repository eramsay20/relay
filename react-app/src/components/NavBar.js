import React from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {

  const user = useSelector(state => state.session.user);

  let links;
  if(user){
    links = (
      <>
        <div className="flex-container">
          <div>
            <NavLink className="nav-link" to="/" exact={true} activeClassName="active"> Home </NavLink>
            <NavLink className="nav-link" to="/users" exact={true} activeClassName="active"> Users </NavLink>
          </div>
          <LogoutButton />
        </div>
      </>
    )
  } else {
    links = (
      <>
        <NavLink className="nav-link" to="/login" exact={true} activeClassName="active">Login</NavLink>
        <NavLink className="nav-link" to="/sign-up" exact={true} activeClassName="active">Sign Up</NavLink>
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
