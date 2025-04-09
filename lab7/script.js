const container = document.getElementById("container");

// 自動聚焦 div 以接收鍵盤事件
container.focus();

// 移除所有非英文字元（保險起見）
function cleanText(text) {
  return text.replace(/[^A-Z]/gi, '');
}

window.addEventListener("keyup", function (e) {
  const key = e.key.toUpperCase();
  console.log("按下的鍵：", key);

  // 清除 container 的內容，確保不會有奇怪字元
  let text = cleanText(container.textContent);

  // 如果第一個字元和按下的鍵相同，刪掉它
  if (text.length > 0 && text[0] === key) {
    text = text.slice(1);
  }

  // 加入新的字元
  text += generateNewChars();

  // 更新畫面
  container.textContent = text;
});

function generateNewChars() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const count = Math.floor(Math.random() * 3) + 1; // 1~3 個字
  let result = "";
  for (let i = 0; i < count; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}
