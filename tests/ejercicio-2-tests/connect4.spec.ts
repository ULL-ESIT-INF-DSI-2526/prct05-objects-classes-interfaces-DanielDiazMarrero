import { describe, test, expect } from "vitest";
import { Connect4 } from "../../src/ejercicio-2/connect4";

describe("Connect4Game Tests", () => {

  test("Alterna correctamente entre jugadores", () => {
    const game = new Connect4() as any;

    const first = game.current_player;
    game.switchPlayer();
    const second = game.current_player;

    expect(first).not.toBe(second);
  });

});