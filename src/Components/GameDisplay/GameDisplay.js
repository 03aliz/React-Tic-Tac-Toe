import React from 'react';
import classes from './GameDisplay.module.css';
import Square from './Square/Square';
import Cross from './Cross/Cross';
import Circle from './Circle/Circle';

const gameDisplay = (props) => {

  
    let Turn = props.currentTurn;
    
    return (
        <div className={classes.Grid}>
        <div className={classes.TopRow}>
            <Square
             disable={props.disableGame}
             id={0} 
             click={(event) => props.clicked(event)} 
             positionClick={(event) => props.position(event, 0)}>
             <p>{props.ticTac[0]}</p>
            </Square>
            <Square 
             disable={props.disableGame}
             id={1}
             click={(event) => props.clicked(event)}
             positionClick={(event) => props.position(event,1)}>
            <p>{props.ticTac[1]}</p>
            </Square>
            <Square 
             disable={props.disableGame}
             id={2}
             click={(event) => props.clicked(event)}
             positionClick={(event) => props.position(event,2)}>
            <p>{props.ticTac[2]}</p>
            </Square>
        </div>
        <div className={classes.MiddleRow}>
             <Square 
              disable={props.disableGame}
              id={3}
              click={(event) => props.clicked(event)}
              positionClick={(event) => props.position(event,3)}>
             <p>{props.ticTac[3]}</p>
            </Square>
            <Square 
             disable={props.disableGame}
             id={4}
             click={(event) => props.clicked(event)}
             positionClick={(event) => props.position(event,4)}>
            <p>{props.ticTac[4]}</p>
            </Square>
            <Square
             disable={props.disableGame}
             id={5}
             click={(event) => props.clicked(event)}
             positionClick={(event) => props.position(event,5)}>
            <p>{props.ticTac[5]}</p>
            </Square>
        </div>
        <div className={classes.BottomRow}>
            <Square 
             disable={props.disableGame}
             id={6}
             click={(event) => props.clicked(event)}
             positionClick={(event) => props.position(event,6)}>
            <p>{props.ticTac[6]}</p>
            </Square>
            <Square 
             disable={props.disableGame}
             id={7}
             click={(event) => props.clicked(event)}
             positionClick={(event) => props.position(event,7)}>
            <p>{props.ticTac[7]}</p>
            </Square>
            <Square 
             disable={props.disableGame}
             id={8}
             click={(event) => props.clicked(event)}
             positionClick={(event) => props.position(event,8)}
             result={props.results}>
            <p>{props.ticTac[8]}</p>
            </Square>
        </div>
    </div>
    )
}

export default gameDisplay;