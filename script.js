'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const wordKanjiElement = document.getElementById("wordKanji");
const wordElement = document.getElementById("word");
const inputElement = document.getElementById("input");
const messageElement = document.getElementById("message");

let currentWordIndex;
let count = 0;

// ことわざを表示
function showWord() {
  currentWordIndex = Math.floor(Math.random() * proverbs.length);
  wordKanjiElement.textContent = proverbsKanji[currentWordIndex];
  wordElement.textContent = proverbs[currentWordIndex];
}

// 入力チェックと次のことわざへの移動
function checkInput() {
  if (inputElement.value === proverbs[currentWordIndex]) {
    inputElement.value = ""; // クリア
    count++;
    if (count < 2) {
      showWord();
    } else {
      wordElement.textContent = " ";
      wordKanjiElement.textContent = " ";
      messageElement.textContent = "ゲームクリア！お疲れ様でした。";
    }
  }
}

// キーイベントリスナーを追加
inputElement.addEventListener("keydown", function(event) {
  console.log(event);
  if (event.key === "Enter") {
    checkInput();
  }
});

// ゲーム開始
showWord();
