import React from 'react';
import { useSelector } from 'react-redux'

function Footer() {
    const WIKI_PATH = 'https://github.com/eramsay20/relay/wiki'
    const GITHUB_PROFILE_MS = 'https://github.com/nM15-vge'
    const GITHUB_PROFILE_RG = 'https://github.com/robert-debug'
    const GITHUB_PROFILE_ER = 'https://github.com/eramsay20'
    const github_icon = require('../frontend-assets/github_icon.png')

    const user = useSelector(state => state.session.user);
    // style = {{ 'position': 'relative', 'right': '20px', 'font-size': '8px' }

    let links;
    if (user){
        links = (
            <div className = 'footer-links' style={{'marginLeft':'300px'}}>
                <a className='footer-link' href={WIKI_PATH} style={{ 'paddingRight': '60px' }}>
                    <img className='footer-image' src={github_icon}></img>
                    <p>Wiki</p>
                </a>
                <a className='footer-link' href={GITHUB_PROFILE_MS}>
                    <img className='footer-image' src={github_icon}></img>
                    <p>Mauro Sanchez</p>
                </a>
                <a className='footer-link' href={GITHUB_PROFILE_RG} target="_blank">
                    <img className='footer-image' src={github_icon}></img>
                    <p>Robert George</p>
                </a>
                <a className='footer-link' href={GITHUB_PROFILE_ER} target="_blank">
                    <img className='footer-image' src={github_icon}></img>
                    <p>Eric Ramsay</p>
                </a>
            </div>
        )
    } else {
        links = (
            <div className='flex-container'>
                <a className='footer-link' href={WIKI_PATH} style={{ 'paddingRight': '60px' }}>
                    <img className='footer-image' src={github_icon}></img>
                    <p>Wiki</p>
                </a>
                <a className='footer-link' href={GITHUB_PROFILE_MS}>
                    <img className='footer-image' src={github_icon}></img>
                    <p>Mauro Sanchez</p>
                </a>
                <a className='footer-link' href={GITHUB_PROFILE_RG} target="_blank">
                    <img className='footer-image' src={github_icon}></img>
                    <p>Robert George</p>
                </a>
                <a className='footer-link' href={GITHUB_PROFILE_ER} target="_blank">
                    <img className='footer-image' src={github_icon}></img>
                    <p>Eric Ramsay</p>
                </a>
            </div>
        )
    }

    return (
        <nav>
            {links}
        </nav>
    );
}

export default Footer;
