import React from 'react';
import './Body.sass';


const body = props => (
    <div class="container">
        <div class="about">
            <img src="https://i.ibb.co/7WSMHKS/ezgif-com-crop-1.gif://ibb.co/cFyfPQy"></img>   
        </div>
        <h1>MUSIC</h1>
        <div class="hero">
            <iframe width="100%" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1014316297&color=%23aa00fa&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <div class="music-links">
            <a href="https://music.apple.com/ng/artist/jide/1363234148"><img class="app-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/404px-Apple_logo_black.svg.png"></img></a>
            <a href="https://open.spotify.com/artist/6aIwarIP5jEoZeVptga1Lq?si=9f_AE4VVRXa6RResiMU1Rg"><img class="spotify-logo" src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/Spotify-512.png"></img></a>
            </div>
        </div>
    </div>
    );
    
export default body;
