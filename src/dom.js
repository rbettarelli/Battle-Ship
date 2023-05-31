

function renderBoard(p1, p2) {

    for(let i = 0; i < 10; i++) {
        let row = document.createElement('div')
        row.classList.add('row-p1')
        row.setAttribute('id', `p1-row${i}`)
        document.getElementById("board1").appendChild(row)
        
        p1.board.board[i].forEach((e,j)=> {
            let cell = document.createElement('div')
            cell.classList.add('cell-p1')
            cell.setAttribute('id', `p1-row${i}-cell${j}`)
            row.appendChild(cell)

        })
    
    }

    for(let i = 0 ; i < 10; i++) {
        let row = document.createElement("div")
        row.classList.add('row-p2')
        row.setAttribute('id', `p2-row${i}`);
        document.getElementById("board2").appendChild(row)

        p2.board.board[i].forEach((e, j)=> {
            let cell = document.createElement('div')
            cell.classList.add("cell-p2")
            cell.setAttribute("id", `p2-row${i}-cell${j}`)
            row.appendChild(cell)
        })
    }

}

function renderShipSelection(i, length) {
    const container = document.querySelector('.ships');
    const shipContainer = document.createElement('div');
    shipContainer.classList.add('ship-container')
    container.appendChild(shipContainer);

    const shipInfo = document.createElement("span")
    shipInfo.classList.add(`info=${i}`)
    shipInfo.textContent='2x'
    shipContainer.appendChild(shipInfo)

    const ship = document.createElement('div')
    ship.classList.add('ship')
    ship.classList.add(`ship-${i}`)
    ship.setAttribute("draggable", "true")
    shipContainer.appendChild(ship)

    for(let i = 0; i< length; i++) {
        const cell = document.createElement('div')
        cell.classList.add('ship-cell')
        ship.appendChild(cell)
    }

}

function renderPlayerFleet(player) {
    document.querySelector('.cell-p2').forEach((e, i)=>{
        let pos1, pos2
        let pos = "" + i;

        if (i < 10) {
            pos1 = 0
            pos2 = i
        }else {
            pos = pos.split('')
            pos1 = pos[0]
            pos2 = pos[1]
        }

        if(!player.board.board[pos1][pos2]) return
        if(player.board.board[pos1][pos2]=='res') e.classList.add('res')
        else e.classList.add('fleet');

    })
}


export {renderBoard, renderPlayerFleet}