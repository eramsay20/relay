import React from 'react';

function Footer() {
    const WIKI_PATH = 'https://github.com/eramsay20/relay/wiki'
    const GITHUB_PROFILE_MS = 'https://github.com/nM15-vge'
    const GITHUB_PROFILE_RG = 'https://github.com/robert-debug'
    const GITHUB_PROFILE_ER = 'https://github.com/eramsay20'

    return (
        <nav>
            <div>
                <a className="nav-link" href={WIKI_PATH} style={{ marginLeft: '20px' }}>Wiki</a>
                <a className="nav-link" href={GITHUB_PROFILE_MS} style={{ marginLeft: '20px' }}>Mauro</a>
                <a className="nav-link" href={GITHUB_PROFILE_RG} style={{ marginLeft: '20px' }}>Robert</a>
                <a className="nav-link" href={GITHUB_PROFILE_ER} style={{ marginLeft: '20px' }}>Eric</a>
            </div>
        </nav>
    );
}

export default Footer;