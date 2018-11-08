import { Component, Fragment } from 'react';
// import classes from './Music.module.css';

//const song = require('../../../../static/audio/Love_at_Sundown.mp3');
//const playIcon = require ('../../../../static/icons/Play.svg');
//const pauseIcon = require('../../../../static/icons/Pause.svg');

import song from '../../../../static/audio/Love_at_Sundown.mp3';
import playIcon from '../../../../static/icons/Play.svg';
import pauseIcon from '../../../../static/icons/Pause.svg';

class Music extends Component {
    state = {
        muted: true
    }

    toggleMusicOnOff = () => {
        this.setState( (prevState) => {
            return { muted: !prevState.muted };
        } );
    } 

    render() {
        let playerIcon = this.state.muted ? playIcon : pauseIcon;

        return(
            <Fragment>
                <div className={this.props.className}>
                    <img className={"Icon"} onClick={this.toggleMusicOnOff} src={playerIcon} alt="playerIcon" />
                    <audio loop muted={this.state.muted} autoPlay> 
                        <source src={song} type="audio/mp3" />
                    </audio>
                </div>
                <style jsx>{`
                    .Icon {
                        display: flex;
                        height: 5vh;
                    }
                `}
                </style>
            </Fragment>
        );
    }        
}

export default Music;