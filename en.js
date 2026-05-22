let currentGroupIndex = 0; 
let currentWordIndex = 0;  
let wordDictionary = wordGroups[currentGroupIndex].words; 

const container = document.getElementById('inputContainer');
const hintElement = document.getElementById('chineseHint');
const msgElement = document.getElementById('successMessage');
const checkBtn = document.getElementById('checkBtn');
const retryBtn = document.getElementById('retryBtn'); // 我們不再使用這個按鈕，它會一直隱藏
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressText = document.getElementById('progressText');
const correctAnswerMsg = document.getElementById('correctAnswerMsg');
const groupSelect = document.getElementById('groupSelect');

// 初始化下拉選單
function initSelect() {
  wordGroups.forEach((group, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.innerText = group.groupName;
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
  retryBtn.style.display = 'none'; // 永遠隱藏重新練習按鈕

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
  
  // 🌟 核心新功能：監聽打字動作。只要一打字，就自動清除錯誤狀態！
  input.addEventListener('input', () => {
      if (input.classList.contains('wrong')) {
          input.classList.remove('wrong'); // 移除紅色邊框
          msgElement.innerText = ''; // 清空錯誤訊息
          correctAnswerMsg.innerText = ''; // 清空答案提示
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
      input.disabled = true; // 答對了才把輸入框鎖定
      checkBtn.style.display = 'none';
  } else {
      // ❌ 答錯的狀態
      input.className = 'word-input wrong';
      msgElement.innerText = "❌ 拼錯囉！直接打字覆蓋，然後按 Enter 再試一次吧！";
      msgElement.className = "success-msg wrong-text";
      correctAnswerMsg.innerHTML = `正確答案是：<span style="color:#4caf50;">${answer}</span>`;
      
      // 🌟 核心新功能：答錯時不再鎖定輸入框，也不隱藏「確定送出」按鈕
      // 將裡面的錯誤文字「自動反白全選」，讓你不用按刪除，直接敲鍵盤就能覆蓋重寫
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
