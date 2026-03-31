// first ===========================================================

const messageEl = document.getElementById("message");
const keyEl = document.getElementById("key");

const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
]
let currentKeyIndex = Math.floor(Math.random() * keys.length);
keyEl.textContent = keys[currentKeyIndex];
 import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
  import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
  import '@pnotify/core/dist/BrightTheme.css';
  import "@pnotify/core/dist/PNotify.css"
  defaultModules.set(PNotifyMobile, {});
document.addEventListener("keydown", (event) => {
    if (event.key === keys[currentKeyIndex]) {
        currentKeyIndex = (currentKeyIndex + 1) % keys.length;
    } else {
        error({
            text: 'Not correct',
            delay: 2000,
        });
    }
});
  document.addEventListener("keypress", (event) => {
  event.preventDefault(); 
});

const newGameBtn = document.getElementById("new-game");

function startNewGame() {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    keyEl.textContent = keys[currentKeyIndex];
    messageEl.textContent = "Натисни правильну клавішу";


    info({
        text: 'Нова гра почалася!',
        delay: 1500,
    });
}

newGameBtn.addEventListener("click", startNewGame);

// second ==========================================================
import Chart from 'chart.js/auto';
const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};
const config = {
  type: 'line',
  data: chartData,
  options: {}
};
 const salesChart = new Chart(
  document.getElementById('sales-chart'),
  config
);

