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

// 🌟 核心修改：初始化下拉選單並加入自動編號
function initSelect() {
  wordGroups.forEach((group, index) => {
    const option = document.createElement('option');
    option.value = index;
    
    // 動態計算這組的單字範圍
    const startNum = index * 10 + 1;
    const endNum = index * 10 + group.words.length;
    
    // 設定顯示格式，例如：題庫 1 (1-10)：第 1 組 (心血管系統 1)
    option.innerText = `題庫 ${index + 1} (${startNum}-${endNum})：${group.groupName}`;
    
    groupSelect.appendChild(option);
  });
}

// 切換題庫
groupSelect.addEventListener('change', (e) => {
  currentGroupIndex = parseInt(e.target.value);
  wordDictionary = wordGroups[currentGroupIndex].words;
  currentWordIndex = 0; 
  loadQuestion(currentWordIndex);
});

// 載入題目
function loadQuestion(index) {
  container.innerHTML = '';
  msgElement.innerText = '';
  correctAnswerMsg.innerText = ''; 
  checkBtn.style.display = 'inline-block';
  retryBtn.style.display = 'none'; 

  progressText.innerText = `第 ${index + 1} 題 / 共 ${wordDictionary.length} 題`;

  const currentData = wordDictionary[index];
  hintElement.innerText = currentData.chinese;

  // 建立輸入框
  const input = document.createElement('input');
  input.type = "text";
  input.className = 'word-input';
  input.placeholder = "請輸入英文..."; 
  input.autocomplete = "off"; 
  input.spellcheck = false; 
  
  // 監聽打字動作：只要一打字，就自動清除錯誤狀態
  input.addEventListener('input', () => {
      if (input.classList.contains('wrong')) {
          input.classList.remove('wrong'); 
          msgElement.innerText = ''; 
          correctAnswerMsg.innerText = ''; 
      }
  });

  // 監聽 Enter 鍵送出
  input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && checkBtn.style.display !== 'none') {
          checkBtn.click();
      }
  });

  container.appendChild(input);
  
  setTimeout(() => input.focus(), 10);
}

// 檢查答案邏輯
checkBtn.addEventListener('click', () => {
  const currentData = wordDictionary[currentWordIndex];
  const answer = currentData.english.toLowerCase();
  const input = container.querySelector('.word-input');
  const userInput = input.value.trim().toLowerCase();

  let isCorrect = (userInput === answer);

  if (isCorrect) {
      // 答對的狀態
      input.className = 'word-input correct';
      msgElement.innerText = "🎉 完全正確！";
      msgElement.className = "success-msg correct-text";
      input.disabled = true; 
      checkBtn.style.display = 'none';
  } else {
      // 答錯的狀態：不鎖定輸入框，自動反白錯字
      input.className = 'word-input wrong';
      msgElement.innerText = "❌ 拼錯囉！直接打字覆蓋，然後按 Enter 再試一次吧！";
      msgElement.className = "success-msg wrong-text";
      correctAnswerMsg.innerHTML = `正確答案是：<span style="color:#4caf50;">${answer}</span>`;
      
      input.select(); 
  }
});

// 上一題
prevBtn.addEventListener('click', () => {
  currentWordIndex--;
  if (currentWordIndex < 0) currentWordIndex = wordDictionary.length - 1;
  loadQuestion(currentWordIndex);
});

// 下一題
nextBtn.addEventListener('click', () => {
  currentWordIndex++;
  if (currentWordIndex >= wordDictionary.length) currentWordIndex = 0;
  loadQuestion(currentWordIndex);
});

// 鍵盤左右鍵切換
document.addEventListener('keydown', (e) => {
  if (document.activeElement.tagName === 'INPUT') return; 
  if (e.key === 'ArrowLeft') prevBtn.click();
  else if (e.key === 'ArrowRight') nextBtn.click();
});

// 初始化
initSelect();
loadQuestion(currentWordIndex);
