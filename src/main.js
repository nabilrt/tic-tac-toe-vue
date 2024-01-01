import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AddNames from "./components/AddNames.vue";
import Draw from "./components/Draw.vue";
import PlayingMode from "./components/PlayingMode.vue";
import Board from "./components/Board.vue";
import Winner from "./components/Winner.vue";
import ResetGame from "./components/ResetGame.vue";

createApp(App)
  .component("AddNames", AddNames)
  .component("Draw", Draw)
  .component("PlayingMode", PlayingMode)
  .component("Board", Board)
  .component("Winner", Winner)
  .component("ResetGame", ResetGame)
  .mount("#app");
