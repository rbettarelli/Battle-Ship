let Ship = (l) => {

  let length = l;

 let tiles = [...Array(l).keys()];
 
  let domTargets = [];
  
let hit = (pos) => {
    if(tiles[pos] == "hit" ) return false
    tiles.splice(pos, 1, "hit")
}

let isSunk = () => {
    let alive = false
    tiles.forEach((e) => {
        if(e !== 'hit') alive = true
    })

    return alive === true ? false : true

}

return {length, tiles, hit, isSunk, domTargets}

};

export { Ship } 
