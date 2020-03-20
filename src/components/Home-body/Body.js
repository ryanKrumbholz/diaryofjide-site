import React from 'react';
import './Body.sass';


const body = props => (
    <div class="container">
        <div class="about">
            <img src="https://i.imgur.com/6NjrV8M.gif"></img>   
        </div>
        <div class="hero">
            <h1>MUSIC</h1>
            <iframe width="100%" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1014316297&color=%23aa00fa&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
    </div>
    );
    
export default body;
