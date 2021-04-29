import React from 'react';
import { useSelector } from 'react-redux'

function Footer() {
    const WIKI_PATH = 'https://github.com/eramsay20/relay/wiki'
    const GITHUB_PROFILE_MS = 'https://github.com/nM15-vge'
    const GITHUB_PROFILE_RG = 'https://github.com/robert-debug'
    const GITHUB_PROFILE_ER = 'https://github.com/eramsay20'
    const github_icon = require('../frontend-assets/github_icon.png')

    const user = useSelector(state => state.session.user);

    let links;
    if (user){
        links = (
            <div className = 'flex-container' style={{'paddingLeft':'230px'}}>
                <a className='flex-container' href={WIKI_PATH} target="_blank" style={{ marginLeft: '20px' }}>
                    <img style={{ 'width': '35px' }} src={github_icon}></img>
                    <p style={{ 'position': 'relative', 'right':'21px', 'font-size':'8px' }}>W</p>
                </a>
                <a className='flex-container' href={GITHUB_PROFILE_MS} target="_blank" style={{ marginLeft: '20px' }}>
                    <img style={{ 'width': '35px' }} src={github_icon}></img>
                    <p style={{ 'position': 'relative', 'right': '21px', 'font-size': '8px' }}>M</p>
                </a>
                <a className='flex-container' href={GITHUB_PROFILE_RG} target="_blank" style={{ marginLeft: '20px' }}>
                    <img style={{ 'width': '35px' }} src={github_icon}></img>
                    <p style={{ 'position': 'relative', 'right': '20px', 'font-size': '8px' }}>R</p>
                </a>
                <a className='flex-container' href={GITHUB_PROFILE_ER} target="_blank" style={{ marginLeft: '20px' }}>
                    <img style={{ 'width': '35px' }} src={github_icon}></img>
                    <p style={{ 'position': 'relative', 'right': '20px', 'font-size': '8px' }}>E</p>
                </a>

            </div>
        )
    } else {
        links = (
            <div className='flex-container' style={{ 'paddingRight': '20px' }}>
                <a className='flex-container' href={WIKI_PATH} style={{ marginLeft: '20px' }}>
                    <img style={{ 'width': '35px' }} src={github_icon}></img>
                    <p style={{ 'position': 'relative', 'right': '21px', 'font-size': '8px' }}>W</p>
                </a>
                <a className='flex-container' href={GITHUB_PROFILE_MS} style={{ marginLeft: '20px' }}>
                    <img style={{ 'width': '35px' }} src={github_icon}></img>
                    <p style={{ 'position': 'relative', 'right': '21px', 'font-size': '8px' }}>M</p>
                </a>
                <a className='flex-container' href={GITHUB_PROFILE_RG} style={{ marginLeft: '20px' }}>
                    <img style={{ 'width': '35px' }} src={github_icon}></img>
                    <p style={{ 'position': 'relative', 'right': '20px', 'font-size': '8px' }}>R</p>
                </a>
                <a className='flex-container' href={GITHUB_PROFILE_ER} style={{ marginLeft: '20px' }}>
                    <img style={{ 'width': '35px' }} src={github_icon}></img>
                    <p style={{ 'position': 'relative', 'right': '20px', 'font-size': '8px' }}>E</p>
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
