import { reactive, ref } from "vue";

export const store = reactive({
  board: ref([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]),

  player1Name: ref(null),
  player2Name: ref(null),
  winner: ref(null),
  firstStage: ref(false),
  secondStage: ref(false),

  players: ref({
    player: {
      name: ref(null),
      symbol: "X",
    },
    computer: {
      name: ref(null),
      symbol: "O",
    },
  }),
  currentPlayer: ref("X"),
  playingMode: ref(""),
  draw: ref(false),
  count: ref(1),
  checkWinner: function () {
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[i][0] !== "" &&
        this.board[i][0] === this.board[i][1] &&
        this.board[i][0] === this.board[i][2] &&
        this.board[i][1] === this.board[i][2]
      ) {
        if (this.board[i][0] === this.players.player.symbol) {
          this.winner = this.players.player.name;
          return;
        } else if (this.board[i][0] === this.players.computer.symbol) {
          this.winner = this.players.computer.name;
          return;
        }
      }
    }

    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[0][i] !== "" &&
        this.board[0][i] === this.board[1][i] &&
        this.board[0][i] === this.board[2][i] &&
        this.board[1][i] === this.board[2][i]
      ) {
        if (this.board[0][i] === this.players.player.symbol) {
          this.winner = this.players.player.name;
          return;
        } else if (this.board[0][i] === this.players.computer.symbol) {
          this.winner = this.players.computer.name;
          return;
        }
      }
    }

    if (
      (this.board[0][0] !== "" &&
        this.board[0][0] === this.board[1][1] &&
        this.board[0][0] === this.board[2][2] &&
        this.board[1][1] === this.board[2][2]) ||
      (this.board[0][2] !== "" &&
        this.board[0][2] === this.board[1][1] &&
        this.board[0][2] === this.board[2][0] &&
        this.board[1][1] === this.board[2][0])
    ) {
      if (this.board[1][1] === this.players.player.symbol) {
        this.winner = this.players.player.name;
        return;
      } else if (this.board[1][1] === this.players.computer.symbol) {
        this.winner = this.players.computer.name;
        return;
      }
    }
  },

  checkDraw: function () {
    let count = 0;
    this.board.forEach((row) => {
      row.forEach((col) => {
        if (col !== "") {
          count++;
        }
      });
    });
    if (count === 9 && this.winner === null) {
      this.draw = true;
    }
  },
  handleClick: function (row, col) {
    this.count += 1;
    if (this.board[row][col] === "" && this.winner === null) {
      let newBoard = [...this.board];
      newBoard[row][col] = this.currentPlayer;

      this.board = newBoard;
      if (this.count >= 5) {
        this.checkWinner();
      }
      this.checkDraw();
      if (this.playingMode === "single" && this.winner === null) {
        this.computerMove();
      } else if (this.playingMode === "multi" && this.winner === null) {
        if (this.currentPlayer === this.players.player.symbol) {
          this.currentPlayer = this.players.computer.symbol;
        } else {
          this.currentPlayer = this.players.player.symbol;
        }
      }
    }
  },
  computerMove: function () {
    if (this.playingMode === "single" && this.winner !== null) {
      return;
    } else {
      let newBoard = [...this.board];
      let row = Math.floor(Math.random() * 3);
      let col = Math.floor(Math.random() * 3);
      if (newBoard[row][col] === "") {
        newBoard[row][col] = this.players.computer.symbol;
        this.board = newBoard;
        this.checkWinner();
        this.checkDraw();
      } else {
        if (this.winner === null && this.draw === false) {
          this.computerMove();
        }
      }
    }
  },
  ResetGame: function () {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.winner = null;
    this.draw = false;
    this.count = 1;
    this.currentPlayer = this.players.player.symbol;
  },

  FirstStage: function (e) {
    this.playingMode = e;
    this.firstStage = true;
  },

  SecondStage: function (player1Name = "Player 1", player2Name = "Computer") {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    const updatedPlayers = {
      player: {
        name: player1Name,
        symbol: this.players.player.symbol,
      },
      computer: {
        name: player2Name === null ? "Computer" : player2Name,
        symbol: this.players.computer.symbol,
      },
    };

    this.players = updatedPlayers;
    this.secondStage = true;
  },
});
