const container = document.getElementById("container");
let wrongCount = 0; // 錯誤次數累積

container.focus();

function cleanText(text) {
  return text.replace(/[^A-Z]/gi, '');
}

window.addEventListener("keyup", function (e) {
  const key = e.key.toUpperCase();
  console.log("按下的鍵：", key);

  let text = cleanText(container.textContent);

  if (text.length > 0 && text[0] === key) {
    // 成功：消除第一個字元，錯誤次數歸零
    text = text.slice(1);
    wrongCount = 0;
  } else {
    // 錯誤次數 +1
    wrongCount++;
  }

  // 檢查是否連續錯 3 次，懲罰 +6 個字元
  if (wrongCount >= 3) {
    text += generateNewChars(6); // 懲罰
    wrongCount = 0; // 重置錯誤次數
  } else {
    // 正常增加 1~3 字元
    text += generateNewChars();
  }

  container.textContent = text;
});

function generateNewChars(count = null) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const n = count || (Math.floor(Math.random() * 3) + 1); // 若無指定則 1~3
  let result = "";
  for (let i = 0; i < n; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}