var container = document.getElementById('container');
window.addEventListener("keyup", function (e) {
    console.log(e.key); // 在控制台输出按下的键

    let container = document.getElementById("container");
    let text = container.innerText; // 获取 container 当前的文本内容

    // 如果第一个字符和按键匹配，则删除
    if (text.length > 0 && text[0] === e.key) {
        text = text.substring(1); // 移除第一个字符
    }

    // 追加 1-3 个随机字符
    text += getRandomChars();

    // 更新 container 内容
    container.innerText = text;
});

// 生成 1-3 个随机字符
function getRandomChars() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let count = Math.floor(Math.random() * 3) + 1; // 生成 1 到 3 之间的随机数
    let result = "";
    for (let i = 0; i < count; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

