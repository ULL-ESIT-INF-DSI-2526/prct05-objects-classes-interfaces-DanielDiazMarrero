import { describe, test, expect } from "vitest";
import { Board } from "../../src/ejercicio-2/board";

describe("Board Tests", () => {

  test("Tablero inicial vacío", () => {
    const board = new Board();
    expect(board.isFull()).toBe(false);
  });

  test("Insertar ficha correctamente", () => {
    const board = new Board();
    const result = board.dropPiece(0, "X");
    expect(result).toBe(true);
  });

  test("Columna llena devuelve false", () => {
    const board = new Board();

    // Llenamos columna 0
    for (let i = 0; i < 6; i++) {
      board.dropPiece(0, "X");
    }

    const result = board.dropPiece(0, "X");
    expect(result).toBe(false);
  });

  test("Detecta victoria horizontal", () => {
    const board = new Board();

    board.dropPiece(0, "X");
    board.dropPiece(1, "X");
    board.dropPiece(2, "X");
    board.dropPiece(3, "X");

    expect(board.checkWinner("X")).toBe(true);
  });

  test("Detecta victoria vertical", () => {
    const board = new Board();

    for (let i = 0; i < 4; i++) {
      board.dropPiece(0, "X");
    }

    expect(board.checkWinner("X")).toBe(true);
  });

  test("Detecta victoria diagonal descendente", () => {
    const board = new Board();

    board.dropPiece(0, "X");

    board.dropPiece(1, "O");
    board.dropPiece(1, "X");

    board.dropPiece(2, "O");
    board.dropPiece(2, "O");
    board.dropPiece(2, "X");

    board.dropPiece(3, "O");
    board.dropPiece(3, "O");
    board.dropPiece(3, "O");
    board.dropPiece(3, "X");

    expect(board.checkWinner("X")).toBe(true);
  });

  test("Detecta victoria diagonal ascendente", () => {
    const board = new Board();

    board.dropPiece(3, "X");

    board.dropPiece(2, "O");
    board.dropPiece(2, "X");

    board.dropPiece(1, "O");
    board.dropPiece(1, "O");
    board.dropPiece(1, "X");

    board.dropPiece(0, "O");
    board.dropPiece(0, "O");
    board.dropPiece(0, "O");
    board.dropPiece(0, "X");

    expect(board.checkWinner("X")).toBe(true);
  });

  test("Tablero lleno correctamente", () => {
    const board = new Board();

    for (let col = 0; col < 7; col++) {
      for (let row = 0; row < 6; row++) {
        board.dropPiece(col, "X");
      }
    }

    expect(board.isFull()).toBe(true);
  });

});