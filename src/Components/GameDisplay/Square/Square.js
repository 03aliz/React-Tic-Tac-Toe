import React from 'react';
import classes from './Square.module.css';

const square = (props) => {

    let disabled = null;

    if(props.disable) {
        disabled = classes.Disable;
    } else {
        disabled = classes.Undisabled;
    }

    console.log(props.disabled);

return (
    <div 
        className={classes.Square + " " + disabled} 
        onClick={(event) => {props.positionClick(event);props.click()}}>{props.children}
    </div>
)

}

export default square;