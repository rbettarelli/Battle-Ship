import {Player} from "./player"
import { renderBoard } from "./dom"

let p1, p2

function initGame() {
    p1 = Player("you")
    p2 = Player("Enemy")

    renderBoard(p1, p2)
}

export {initGame, p1, p2}