let currentGroupIndex = 0; // 目前選擇的群組
let currentWordIndex = 0;  // 目前選擇群組中的第幾題
let wordDictionary = wordGroups[currentGroupIndex].words; // 載入目前群組的單字

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

// 初始化下拉選單
function initSelect() {
  wordGroups.forEach((group, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.innerText = group.groupName;
    groupSelect.appendChild(option);
  });
}

// 當使用者切換下拉選單時觸發
groupSelect.addEventListener('change', (e) => {
  currentGroupIndex = parseInt(e.target.value);
  wordDictionary = wordGroups[currentGroupIndex].words;
  currentWordIndex = 0; // 換組時，從第一題重新開始
  loadQuestion(currentWordIndex);
});

function loadQuestion(index) {
  container.innerHTML = '';
  msgElement.innerText = '';
  correctAnswerMsg.innerText = ''; 
  checkBtn.style.display = 'inline-block';
  retryBtn.style.display = 'none';

  progressText.innerText = `第 ${index + 1} 題 / 共 ${wordDictionary.length} 題`;

  const currentData = wordDictionary[index];
  const answer = currentData.english.toLowerCase();
  hintElement.innerText = currentData.chinese;

  // 動態生成輸入框 (包含空白鍵和括號的處理)
  for (let i = 0; i < answer.length; i++) {
      const input = document.createElement('input');
      input.type = "text";
      input.maxLength = 1;
      input.className = 'letter-box';
      input.dataset.index = i; 
      
      // 若答案中有空白或括號，可以直接給予特定樣式或預填，這裡為了統一練習標準，讓使用者自行輸入
      
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
      input.disabled = true; 
  });

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
