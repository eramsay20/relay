import React from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  const history = useHistory()
  const profile_icon_violet = require('../frontend-assets/profile_icon_violet.png')
  const relay_banner = require('../frontend-assets/relay_banner_2_dark.png')
  const user = useSelector(state => state.session.user);
  
  let user_initial;
  if (user){
    user_initial = user.username.split('')[0].toUpperCase()
  }
  
  const return_home = () => {
      history.push('/')
  }  

  return (
    <nav className='nav-container'>
      { user && 
        <div onClick={return_home}><img style={{'height':'50px'}} alt='logo' src={relay_banner}></img></div>
      }
      <div></div>
      { user && 
        (<div>
          <LogoutButton />
        </div>)
      }
      { user_initial &&
        (<div className='flex-container'>
          <img style={{ 'width': '30px', 'paddingLeft': '10px' }} src={profile_icon_violet}></img>
          <p style={{ 'position': 'relative', 'left': '-45px' }}>{user_initial}</p>
        </div>)
      }
    </nav>
  );
}

export default NavBar;
