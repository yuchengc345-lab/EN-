let currentGroupIndex = 0; 
let currentWordIndex = 0;  
let wordDictionary = wordGroups[currentGroupIndex].words; 

const container = document.getElementById('inputContainer');
const hintElement = document.getElementById('chineseHint');
const msgElement = document.getElementById('successMessage');
const checkBtn = document.getElementById('checkBtn');
const retryBtn = document.getElementById('retryBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressText = document.getElementById('progressText');
const correctAnswerMsg = document.getElementById('correctAnswerMsg');
const groupSelect = document.getElementById('groupSelect');

function initSelect() {
  wordGroups.forEach((group, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.innerText = group.groupName;
    groupSelect.appendChild(option);
  });
}

groupSelect.addEventListener('change', (e) => {
  currentGroupIndex = parseInt(e.target.value);
  wordDictionary = wordGroups[currentGroupIndex].words;
  currentWordIndex = 0; 
  loadQuestion(currentWordIndex);
});

// 核心：改為生成單一輸入框
function loadQuestion(index) {
  container.innerHTML = '';
  msgElement.innerText = '';
  correctAnswerMsg.innerText = ''; 
  checkBtn.style.display = 'inline-block';
  retryBtn.style.display = 'none';

  progressText.innerText = `第 ${index + 1} 題 / 共 ${wordDictionary.length} 題`;

  const currentData = wordDictionary[index];
  hintElement.innerText = currentData.chinese;

  // 建立單一普通輸入框
  const input = document.createElement('input');
  input.type = "text";
  input.className = 'word-input';
  input.placeholder = "請輸入英文..."; // 加入浮水印提示
  input.autocomplete = "off"; // 關閉瀏覽器自動填入
  input.spellcheck = false; // 關閉拼字檢查（避免默寫時作弊）
  
  // 監聽 Enter 鍵直接送出
  input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && checkBtn.style.display !== 'none') {
          checkBtn.click();
      }
  });

  container.appendChild(input);
  
  // 頁面載入後自動聚焦，方便直接打字
  setTimeout(() => input.focus(), 10);
}

// 核心：改為對比整段文字
checkBtn.addEventListener('click', () => {
  const currentData = wordDictionary[currentWordIndex];
  const answer = currentData.english.toLowerCase();
  
  // 取得唯一的那一個輸入框
  const input = container.querySelector('.word-input');
  // 取得使用者的輸入（轉小寫，並去除前後多餘空白）
  const userInput = input.value.trim().toLowerCase();

  let isCorrect = (userInput === answer);

  if (isCorrect) {
      input.className = 'word-input correct';
      msgElement.innerText = "🎉 完全正確！";
      msgElement.className = "success-msg correct-text";
  } else {
      input.className = 'word-input wrong';
      msgElement.innerText = "❌ 拼錯囉！";
      msgElement.className = "success-msg wrong-text";
      correctAnswerMsg.innerHTML = `正確答案是：<span style="color:#4caf50;">${answer}</span>`;
  }
  
  input.disabled = true; // 檢查後鎖定輸入框
  checkBtn.style.display = 'none';
  retryBtn.style.display = 'inline-block';
});

retryBtn.addEventListener('click', () => loadQuestion(currentWordIndex));

prevBtn.addEventListener('click', () => {
  currentWordIndex--;
  if (currentWordIndex < 0) currentWordIndex = wordDictionary.length - 1;
  loadQuestion(currentWordIndex);
});

nextBtn.addEventListener('click', () => {
  currentWordIndex++;
  if (currentWordIndex >= wordDictionary.length) currentWordIndex = 0;
  loadQuestion(currentWordIndex);
});

document.addEventListener('keydown', (e) => {
  if (document.activeElement.tagName === 'INPUT') return; 
  if (e.key === 'ArrowLeft') prevBtn.click();
  else if (e.key === 'ArrowRight') nextBtn.click();
});

// 初始化啟動
initSelect();
loadQuestion(currentWordIndex);
