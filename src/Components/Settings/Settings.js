import React from 'react';
import PlayAI from './Setting/PlayAI/PlayAI';
import TwoPlayers from './Setting/TwoPlayer/TwoPlayer';
import ResetGame from './Setting/ResetGame/ResetGame';
import classes from './Settings.module.css';

const settings = (props) => {

    return (

         <div className={classes.Settings}>
            <PlayAI />
            <TwoPlayers />
            <ResetGame reset={props.resetGame} />
         </div>

        )
   
    }

export default settings;