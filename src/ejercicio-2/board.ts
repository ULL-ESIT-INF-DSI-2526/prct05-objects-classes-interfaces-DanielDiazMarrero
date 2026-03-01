import { Player } from "./player";

export class Board {
  // Propiedades
  public board: string[][];
  private cols = 7;
  private rows = 6;

  // Constructor
  constructor() {
    this.board = Array.from({ length: this.rows }, () => Array(this.cols).fill(" "));
  }

  // Métodos
  dropPiece(column: number, symbol: string): boolean {
    // Checkeamos que no supere las dimensiones
    if (column < 0 || column >= this.cols) return false;

    for (let row = this.rows - 1; row >= 0; row--) {
      if (this.board[row][column] === " ") {
        this.board[row][column] = symbol;
        return true
      }
    }
    

    console.log("Columna completa. Elige otra");
    return false; 
  }

  printBoard(): void {
    console.table(this.board);
  }

  isFull(): boolean {
    return this.board[0].every(cell => cell != " ")
  }

  private checkHorizontal(symbol: string): boolean {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols - 3; col++) {
        if (
          this.board[row][col] === symbol &&
          this.board[row][col + 1] === symbol &&
          this.board[row][col + 2] === symbol &&
          this.board[row][col + 3] === symbol
        ) return true;
      }
    }
    return false;
  }

  private checkVertical(symbol: string): boolean {
    for (let col = 0; col < this.cols; col++) {
      for (let row = 0; row < this.rows - 3; row++) {
        if (
          this.board[row][col] === symbol &&
          this.board[row + 1][col] === symbol &&
          this.board[row + 2][col] === symbol &&
          this.board[row + 3][col] === symbol
        ) return true;
      }
    }
    return false;
  }

  private checkDiagonal(symbol: string): boolean {
    // Diagonal descendente
    for (let row = 0; row < this.rows - 3; row++) {
      for (let col = 0; col < this.cols - 3; col++) {
        if (
          this.board[row][col] === symbol &&
          this.board[row + 1][col + 1] === symbol &&
          this.board[row + 2][col + 2] === symbol &&
          this.board[row + 3][col + 3] === symbol
        ) return true;
      }
    }

    // Diagonal ascendente
    for (let row = 3; row < this.rows; row++) {
      for (let col = 0; col < this.cols - 3; col++) {
        if (
          this.board[row][col] === symbol &&
          this.board[row - 1][col + 1] === symbol &&
          this.board[row - 2][col + 2] === symbol &&
          this.board[row - 3][col + 3] === symbol
        ) return true;
      }
    }

    return false;
  }

  checkWinner(symbol: string): boolean {
    return (
      this.checkHorizontal(symbol) ||
      this.checkVertical(symbol) ||
      this.checkDiagonal(symbol)
    );
  }
}