import { Player } from "./player";
import { Board } from "./board";
import * as readline from "readline-sync";

export class Connect4 {
  // Propiedades
  public players: Player[];
  public game_board: Board;
  public current_player: Player;

  // Constructor
  constructor() {
    this.game_board = new Board();
    this.players = [
      new Player("Player 1", "X"),
      new Player("Player 2", "O")
    ];
    this.current_player = this.players[0];
  }

  // Métodos
  switchPlayer(): void {
    this.current_player = this.current_player == this.players[0] ? this.players[1] : this.players[0]
  }

  start(): void {
    console.log("¡Comienza el juego!");

    while (true) {
      console.log(`Turno de ${this.current_player.name}`);

      let placed = false;

      while (!placed) {
        const column = readline.questionInt("Elige columna (0-6): ");
        placed = this.game_board.dropPiece(column, this.current_player.chip);
      }

      this.game_board.printBoard();

      if (this.game_board.checkWinner(this.current_player.chip)) {
        console.log(`¡${this.current_player.name} ha ganado!`);
        break;
      }

      if (this.game_board.isFull()) {
        console.log("Empate.");
        break;
      }

      this.switchPlayer();
    }
  }

}