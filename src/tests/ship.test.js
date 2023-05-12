import { Ship } from "../ship";

test("has length property", () => {
  let ship1 = Ship(4);
  expect(ship1.length).toBe(4);
});


test("tiles", () => {
    let ship1 = Ship(5);
    expect(ship1.tiles).toEqual([0,1,2,3,4])
})

test ('hit', () => {
    let ship1 = Ship(4);
    ship1.hit(3)
    expect(ship1.tiles[3]).toEqual('hit')
})

test('isSunk', () => {
    let ship1 = Ship(5);
    ship1.hit(0);
    ship1.hit(1);
    ship1.hit(2);
    ship1.hit(3);
    ship1.hit(4);
    expect(ship1.isSunk).toBeTruth


})