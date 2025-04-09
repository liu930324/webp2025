let allData = [];         // 所有資料
let filteredData = [];    // 搜尋後資料
let currentPage = 1;
const pageSize = 10;

const container = document.getElementById("csie").querySelector("tbody");
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const searchInput = document.getElementById("search");

// 取得資料
fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6")
  .then(res => res.json())
  .then(data => {
    allData = data;
    filteredData = allData;
    renderTable();
  });

// 渲染表格
function renderTable() {
  container.innerHTML = "";
  const start = (currentPage - 1) * pageSize;
  const pageData = filteredData.slice(start, start + pageSize);

  pageData.forEach(item => {
    const row = container.insertRow();
    row.insertCell(0).innerText = item.title;
    row.insertCell(1).innerText = item.showInfo[0]?.location || "無地點資料";
    row.insertCell(2).innerText = item.showInfo[0]?.price || "無票價資料";
  });

  const totalPages = Math.ceil(filteredData.length / pageSize);
  pageInfo.innerText = `第 ${currentPage} 頁 / 共 ${totalPages} 頁`;

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

// 換頁按鈕
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
});

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredData.length / pageSize);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
});

// 搜尋功能：onchange or oninput
searchInput.addEventListener("input", function () {
  const keyword = this.value.trim().toLowerCase();
  currentPage = 1;
  filteredData = allData.filter(item =>
    item.title.toLowerCase().includes(keyword)
  );
  renderTable();
});