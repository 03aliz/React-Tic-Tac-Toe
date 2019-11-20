import React from 'react';
import classes from './Result.module.css';

const result = (props) => {
    let result = null;

    if (props.xWin) {
        result = 'X wins!';
    } 
    else if (props.oWin) {
        result= 'O wins!';
    }
    else if(props.draw) {
        result= 'Draw';
    }

    return (
    <div className={classes.ResultBoard}><p><strong>{result}</strong></p></div>
    )
} 

export default result;