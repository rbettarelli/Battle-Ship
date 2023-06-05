import { Player } from "./player"
import { renderBoard, createDragAndDropFleet, renderButtons} from "./dom"

let p1, p2

function initGame() {
    p1 = Player("you")
    p2 = Player("Enemy")


    renderButtons(p1)
    renderBoard(p1, p2)
    createDragAndDropFleet(p1)
}

export {initGame, p1, p2}