import { Gameboard } from "./gameboard";


function randomPositions() {
    let random = Math.floor(Math.random() * 10)
    return random
}

const Player = (n) => {
    const name = n;
    let board = Gameboard();
    let turn = false;

    //change turns between player and enemy

    let isTurn = (enemy) => {
        turn = true;
        enemy.turn.set(false);
    }

    let attack = () => {
        let pos1 = randomPositions()
        let pos2 = randomPositions()
        return [pos1, pos2]
    
    }

    // ship with random pos and orietation

    const randomShip = () => {
        let pos1 = randomPositions()
        let pos2 = randomPositions()
        let dir = Math.round(Math.random())

        dir === 0 ? (dir = "h", board.placeShip(pos1, pos2, length, dir) == false ? false : true)
        : dir === 1 ? (dir = "v", board.placeShip(pos1, pos2, length, dir) == false ? false : true)
        : false;

    }

    //create a 8 random ships on board

    const randomFleet = () => {

        //Create 2 ship of length 1
        for(let i = 0; i< 2 ; ) {
            if(randomShip(1) == false) continue
            i++
            
        }
        //create 2 ships of length 2
        for(let i = 0; i< 2 ; ) {
            if(randomShip(2) == false) continue
            i++
            
        }
        //create 2 ships of lenght 3
        for(let i = 0; i< 2 ; ) {
            if(randomShip(3) == false) continue
            i++
            
        }

        // create 2 ships of length 4
        for(let i = 0; i< 2 ; ) {
            if(randomShip(4) == false) continue
            i++
            
        }
        board.isStartAllowed.set(true)
    };

    return {
        name, board, attack, randomFleet, randomShip, 
        turn: {
            get: function() {
                return true
            },
            set: function(value) {
                turn = value;
            }
        }
    }
    

}

export { Player }