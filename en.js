const wordDictionary = [
  { chinese: "蘋果", english: "apple" },
  { chinese: "香蕉", english: "banana" },
  { chinese: "奇妙的；極好的", english: "wonderful" }
];

let currentWordIndex = 0;
const container = document.getElementById('inputContainer');
const hintElement = document.getElementById('chineseHint');
const msgElement = document.getElementById('successMessage');
const checkBtn = document.getElementById('checkBtn');
const retryBtn = document.getElementById('retryBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressText = document.getElementById('progressText');
const correctAnswerMsg = document.getElementById('correctAnswerMsg');

function loadQuestion(index) {
  // 清空狀態
  container.innerHTML = '';
  msgElement.innerText = '';
  correctAnswerMsg.innerText = ''; 
  
  // 顯示/隱藏對應按鈕
  checkBtn.style.display = 'inline-block';
  retryBtn.style.display = 'none';

  // 更新進度文字
  progressText.innerText = `第 ${index + 1} 題 / 共 ${wordDictionary.length} 題`;

  const currentData = wordDictionary[index];
  const answer = currentData.english.toLowerCase();
  hintElement.innerText = currentData.chinese;

  // 生成輸入框
  for (let i = 0; i < answer.length; i++) {
      const input = document.createElement('input');
      input.type = "text";
      input.maxLength = 1;
      input.className = 'letter-box';
      input.dataset.index = i; 
      
      input.addEventListener('input', (e) => {
          const val = e.target.value;
          const idx = parseInt(e.target.dataset.index);
          if (val !== '' && container.children[idx + 1]) {
              container.children[idx + 1].focus();
          }
      });

      input.addEventListener('keydown', (e) => {
          const idx = parseInt(e.target.dataset.index);
          if (e.key === 'Backspace' && e.target.value === '' && idx > 0) {
              container.children[idx - 1].focus();
          }
          if (e.key === 'Enter' && checkBtn.style.display !== 'none') {
              checkBtn.click();
          }
      });

      container.appendChild(input);
  }
  
  if(container.children.length > 0) {
      container.children[0].focus();
  }
}

// 「確定送出」檢查邏輯
checkBtn.addEventListener('click', () => {
  const currentData = wordDictionary[currentWordIndex];
  const answer = currentData.english.toLowerCase();
  const inputs = Array.from(container.children);
  let isAllCorrect = true;

  inputs.forEach((input, idx) => {
      const val = input.value.toLowerCase();
      if (val === answer[idx]) {
          input.className = 'letter-box correct';
      } else {
          input.className = 'letter-box wrong';
          isAllCorrect = false;
      }
      input.disabled = true; // 檢查後鎖定
  });

  // 切換按鈕狀態：藏起確定按鈕，顯示重新練習按鈕
  checkBtn.style.display = 'none';
  retryBtn.style.display = 'inline-block';

  if (isAllCorrect) {
      msgElement.innerText = "🎉 完全正確！";
      msgElement.className = "success-msg correct-text";
  } else {
      msgElement.innerText = "❌ 有些字母拼錯囉！";
      msgElement.className = "success-msg wrong-text";
      correctAnswerMsg.innerHTML = `正確答案是：<span style="color:#4caf50; letter-spacing: 2px;">${answer}</span>`;
  }
});

// 「重新練習」按鈕點擊
retryBtn.addEventListener('click', () => {
  loadQuestion(currentWordIndex);
});

// 「上一題」按鈕點擊
prevBtn.addEventListener('click', () => {
  currentWordIndex--;
  if (currentWordIndex < 0) {
      currentWordIndex = wordDictionary.length - 1; // 循環回最後一題
  }
  loadQuestion(currentWordIndex);
});

// 「下一題」按鈕點擊
nextBtn.addEventListener('click', () => {
  currentWordIndex++;
  if (currentWordIndex >= wordDictionary.length) {
      currentWordIndex = 0; // 循環回第一題
  }
  loadQuestion(currentWordIndex);
});

// 🚀 全域鍵盤監聽：支援電腦左右鍵切換題目
document.addEventListener('keydown', (e) => {
  // 檢查目前光標是不是在輸入框裡，如果是，就不觸發左右鍵換題（避免打字時誤觸）
  if (document.activeElement.tagName === 'INPUT') {
      return; 
  }
  
  if (e.key === 'ArrowLeft') {
      prevBtn.click();
  } else if (e.key === 'ArrowRight') {
      nextBtn.click();
  }
});

// 啟動第一題
loadQuestion(currentWordIndex);
