import React from 'react';

const resetGame = (props) => (
    <div onClick={props.reset} style={{border:"none"}}>Reset board</div>
)

export default resetGame;