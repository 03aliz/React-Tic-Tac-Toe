import React, { Component } from 'react';
import Settings from '../../Components/Settings/Settings';
import Turn from '../../Components/UI/Turn/Turn';
import GameDisplay from '../../Components/GameDisplay/GameDisplay';
import Result from '../../Components/UI/Result/Result';


class TicTacGame extends Component {    

    state = {
        position: {
            0 : '',
            1 : '',
            2 : '',
            3 : '',
            4 : '',
            5 : '',
            6 : '',
            7 : '',
            8 : ''
        },
        currentTurn : 'X',
        lastTurn:'X',
        xWin : false,
        oWin : false,
        draw : false,
        gameOver:false,
        AI:false,
        moves : 9
    }

    gameResultHandler = () => {
        if (this.state.moves <= 0) {
            this.setState({draw:true, gameOver:true});
        } 

        //win handler for X
        
        if((this.state.position[0] === 'X' && this.state.position[1] === 'X' && this.state.position[2] === 'X') || 
           (this.state.position[3] === 'X' && this.state.position[4] === 'X' && this.state.position[5] === 'X') ||
           (this.state.position[6] === 'X' && this.state.position[7] === 'X' && this.state.position[8] === 'X') ||
           (this.state.position[0] === 'X' && this.state.position[3] === 'X' && this.state.position[6] === 'X') ||
           (this.state.position[1] === 'X' && this.state.position[4] === 'X' && this.state.position[7] === 'X') ||
           (this.state.position[2] === 'X' && this.state.position[5] === 'X' && this.state.position[8] === 'X') ||
           (this.state.position[0] === 'X' && this.state.position[4] === 'X' && this.state.position[8] === 'X') ||
           (this.state.position[2] === 'X' && this.state.position[4] === 'X' && this.state.position[6] === 'X')) {
            this.setState({xWin:true,gameOver:true});
        }

        // win handler for O

        if((this.state.position[0] === 'O' && this.state.position[1] === 'O' && this.state.position[2] === 'O') || 
           (this.state.position[3] === 'O' && this.state.position[4] === 'O' && this.state.position[5] === 'O') ||
           (this.state.position[6] === 'O' && this.state.position[7] === 'O' && this.state.position[8] === 'O') ||
           (this.state.position[0] === 'O' && this.state.position[3] === 'O' && this.state.position[6] === 'O') ||
           (this.state.position[1] === 'O' && this.state.position[4] === 'O' && this.state.position[7] === 'O') ||
           (this.state.position[2] === 'O' && this.state.position[5] === 'O' && this.state.position[8] === 'O') ||
           (this.state.position[0] === 'O' && this.state.position[4] === 'O' && this.state.position[8] === 'O') ||
           (this.state.position[2] === 'O' && this.state.position[4] === 'O' && this.state.position[6] === 'O')) {
            this.setState({oWin:true, gameOver:true});
        }

        console.log('gameResultHandler');
    }

    addTicTacHandler = (event) => {
        if(this.state.lastTurn === 'X') {
            this.setState({currentTurn: 'O', lastTurn:'O'});
        } else {
            this.setState({currentTurn:'X', lastTurn:'X'});
        } 
         

    }


    addToPositionHandler = (event, id) => {
        let position = {...this.state.position};

        position[id] = this.state.currentTurn;
        this.setState({position : position, moves: this.state.moves - 1},this.gameResultHandler);
        


            event.target.style.pointerEvents = 'none';
        
       
    }

    resetGameHandler = () => {
        this.setState({
            position: {
            0 : '',
            1 : '',
            2 : '',
            3 : '',
            4 : '',
            5 : '',
            6 : '',
            7 : '',
            8 : ''
        },
        currentTurn : 'X',
        lastTurn:'X',
        xWin : false,
        oWin : false,
        draw : false,
        gameOver:false,
        moves : 9
    });


    }

    computerGameHandler = () => {
        let randomNum = 0;
        let position = {...this.state.position};
        let positions = [0,1,2,3,4,5,6,7,8];
        console.log(positions)

        Object.keys(position).map((val, index) => {
            if(position[val] !== '') {
                positions.splice(val, 1);
            }
        });
        
        randomNum = Math.floor(Math.random() * positions.length);

        position[positions[randomNum]] = this.state.currentTurn;
        console.log(position);
        
        
        this.setState({position:position, moves: this.state.moves-1});
        
    }
   

    
    render() {
        return (
            <div>
                <Settings resetGame={this.resetGameHandler}/>
                <Turn turn={this.state.currentTurn} />
                <GameDisplay 
                ticTacVal={this.state.currentTurn} 
                clicked={this.addTicTacHandler} 
                position={this.addToPositionHandler} 
                ticTac={this.state.position}
                disableGame={this.state.gameOver}
                computer={this.computerGameHandler}/>
                <Result 
                xWin={this.state.xWin}
                oWin={this.state.oWin}
                draw={this.state.draw}/>
            </div>

        )
    }
    
}

export default TicTacGame;