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
const correctAnswerMsg = document.getElementById('correctAnswerMsg');

function loadQuestion(index) {
  container.innerHTML = '';
  msgElement.innerText = '';
  correctAnswerMsg.innerText = ''; 
  checkBtn.disabled = false; // 恢復按鈕可點擊

  const currentData = wordDictionary[index];
  const answer = currentData.english.toLowerCase();
  hintElement.innerText = currentData.chinese;

  for (let i = 0; i < answer.length; i++) {
      const input = document.createElement('input');
      input.type = "text";
      input.maxLength = 1;
      input.className = 'letter-box';
      input.dataset.index = i; 
      
      // 監聽輸入：現在只負責自動跳到下一格，不檢查對錯
      input.addEventListener('input', (e) => {
          const val = e.target.value;
          const idx = parseInt(e.target.dataset.index);
          if (val !== '' && container.children[idx + 1]) {
              container.children[idx + 1].focus();
          }
      });

      // 監聽鍵盤：支援按 Backspace 退回上一格，按 Enter 直接送出
      input.addEventListener('keydown', (e) => {
          const idx = parseInt(e.target.dataset.index);
          if (e.key === 'Backspace' && e.target.value === '' && idx > 0) {
              container.children[idx - 1].focus();
          }
          if (e.key === 'Enter') {
              checkBtn.click();
          }
      });

      container.appendChild(input);
  }
  
  if(container.children.length > 0) {
      container.children[0].focus();
  }
}

// 點擊「確定」按鈕的檢查邏輯
checkBtn.addEventListener('click', () => {
  const currentData = wordDictionary[currentWordIndex];
  const answer = currentData.english.toLowerCase();
  const inputs = Array.from(container.children);
  
  let isAllCorrect = true;

  // 檢查每一個字母
  inputs.forEach((input, idx) => {
      const val = input.value.toLowerCase();
      if (val === answer[idx]) {
          input.className = 'letter-box correct';
      } else {
          input.className = 'letter-box wrong';
          isAllCorrect = false;
      }
      input.disabled = true; // 檢查後鎖定輸入框，不讓使用者修改
  });

  checkBtn.disabled = true; // 鎖定按鈕

  // 顯示結果與正確答案
  if (isAllCorrect) {
      msgElement.innerText = "🎉 完全正確！";
      msgElement.className = "success-msg correct-text";
  } else {
      msgElement.innerText = "❌ 有些字母拼錯囉！";
      msgElement.className = "success-msg wrong-text";
      correctAnswerMsg.innerHTML = `正確答案是：<span style="color:#4caf50; letter-spacing: 2px;">${answer}</span>`;
  }

  msgElement.innerText += " (5秒後進入下一題...)";

  // 5秒後進入下一題
  setTimeout(() => {
      currentWordIndex++;
      if (currentWordIndex >= wordDictionary.length) {
          currentWordIndex = 0; // 背完一輪重新開始
      }
      loadQuestion(currentWordIndex);
  }, 5000);
});

// 啟動第一題
loadQuestion(currentWordIndex);
