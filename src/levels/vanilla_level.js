import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Level1 extends Component {


    constructor() {
        // STATE // SETUP STARTING STATS
        super();
        this.state = {
            moves: 3, //TOTAL AMOUNT OF MOVES ALLOWED
            currentNum: 0,//STARTING NUMBER
            continue: false,//DONT TOUCH
            emojiUrl: 'http://www.stickpng.com/assets/images/587389d1f3a71010b5e8ef4a.png', //DONT TOUCH
            goal: 2,//END GOAL TO REACH    //DESIRED GOAL -1
        }
    }

    //   FUNCTIONS and LOGIC 

    // RESET ALL VALUES
    reset() {
        this.setState({
            // SET ALL OF THESE VALUES THE SAME AS YOUR SETUP IN STATE
            moves: 3,
            currentNum: 0,
            continue: false,
            goal: 2, //DESIRED GOAL -1
        })
    }
    // ADDITION
    addNum() {
        let numTotal = this.state.currentNum
        let buttonNum = 1// <---Put button Value here
        let newTotal = (numTotal + buttonNum).toFixed(2) // <--- button Logic
        let moves = this.state.moves
        let newMoves = moves - 1
        if (newMoves > -1) {
            this.setState({
                currentNum: newTotal, moves: newMoves,
            })
            this.winLevel()
        }
        // onClick={(e) => { this.addNum(e.target.value) }}
    }
    // SUBTRACTION
    subtractNum() {
        let numTotal = this.state.currentNum
        let buttonNum = 3// <---Put button Value here
        let newTotal = (numTotal - buttonNum).toFixed(2) // <--- button Logic
        let moves = this.state.moves
        let newMoves = moves - 1
        if (newMoves > -1) {
            this.setState({
                currentNum: newTotal, moves: newMoves,
            })
            this.winLevel()
        }
        // onClick={(e) => { this.subtractNum(e.target.value) }}
    }

    // MULTIPLY
    multiplyNum() {
        let numTotal = this.state.currentNum
        let buttonNum = 5// <---Put button Value here
        let newTotal = (numTotal * buttonNum).toFixed(2) // <--- button Logic
        let moves = this.state.moves
        let newMoves = moves - 1
        if (newMoves > -1) {
            this.setState({
                currentNum: newTotal, moves: newMoves,
            })
            this.winLevel()
        }
        // onClick={(e) => { this.multiplyNum(e.target.value) }}
    }

    // DIVISION
    divideNum() {
        let numTotal = this.state.currentNum
        let buttonNum = 6// <---Put button Value here
        let newTotal = (numTotal / buttonNum).toFixed(2) // <--- button Logic
        let moves = this.state.moves
        let newMoves = moves - 1
        if (newMoves > -1) {
            this.setState({
                currentNum: newTotal, moves: newMoves,
            })
            this.winLevel()
        }
        // onClick={(e) => { this.divideNum(e.target.value) }}
    }

    // SQUARE
    squareNum() {
        let numTotal = this.state.currentNum
        let newTotal = (numTotal * numTotal).toFixed(2) // <--- button Logic
        let moves = this.state.moves
        let newMoves = moves - 1
        if (newMoves > -1) {
            this.setState({
                currentNum: newTotal, moves: newMoves,
            })
            this.winLevel()
        }
        // onClick={(e) => { this.squareNum(e.target.value) }}
    }

    // SQUAREROOT
    squareRootNum() {
        let numTotal = this.state.currentNum
        let newTotal =  (Math.sqrt(numTotal)).toFixed(2)// <--- button Logic
        let moves = this.state.moves
        let newMoves = moves - 1
        if (newMoves > -1) {
            this.setState({
                currentNum: newTotal, moves: newMoves,
            })
            this.winLevel()
        }
        // onClick={(e) => { this.squareRootNum(e.target.value) }}
    }


    // NUM GOT TO GOAL CHECK
    winLevel() {
        let goal = this.state.goal
        let currentNum = this.state.currentNum
        if (goal === currentNum) {
            this.setState({
                continue: true
            })
        }
    }

    render() {
        return (
            <div className="App">
                <div className='left'></div>
                <div className='phone'>
                    <h1> Calculator: The Game </h1>
                    <div className='screen'>

                        <div className='level'><h1>Level: </h1></div>
                        <div className='screenDisplay'>

                            <div className='levelInfo'>
                                {(this.state.moves > 0) ? <img id='successEmoji' src='http://www.stickpng.com/assets/images/587389d1f3a71010b5e8ef4a.png' alt='' /> : (this.state.continue === true) ? <img id='successEmoji' src='http://pluspng.com/img-png/well-done-png-hd-green-good-job-clipart-665.png' alt='' /> : <img id='successEmoji' src='https://www.pngarts.com/files/1/Sad-Face-PNG-Transparent-Image.png' alt='' />}
                                <h4>Moves: {this.state.moves}</h4>
                                <h4>Goal: {this.state.goal + 1}</h4>
                            </div>
                            <div className='currentNum'>{this.state.currentNum}</div>
                        </div>
                    </div>
                    {/* NumPad 
                        Format Like this
                         1 2 3
                         4 5 6
                         7 8 9
                    */}
                    <div className='input'>
                        <div className='row_1'>
                            <button className='numPad_1'>  </button>

                            <button className='numPad_2'>  </button>

                            <div className='clear' onClick={(e) => { this.reset(e.target.value) }}>
                                {(this.state.continue === true) ? <Link to='/level2'> <button className='continue'>Good Job</button> </Link>
                                    : 'CLR'}
                            </div>

                        </div>
                        <div className='row_2'>
                            <button className='numPad_4'>4</button>

                            <button className='numPad_5'>5</button>

                            <button className='numPad_6'>6</button>

                        </div>
                        <div className='row_3'>
                            <button className='numPad_7'>7</button>

                            <button className='numPad_8'><Link to='/settings'>SETTINGS</Link></button>

                            <button className='numPad_9'><Link to='/'> QUIT </Link></button>

                        </div>
                    </div>
                    <div className='adSpace'>
                        <h1> Im An Add </h1>
                    </div>
                </div>
                <div className='right'></div>
            </div>
        );
    }
}

