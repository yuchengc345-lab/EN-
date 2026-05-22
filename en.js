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

// 核心：智慧換行的邏輯
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

  // 1. 計算智慧換行：每排最多放多少字母 (根據介面寬度決定)
  const maxLettersPerRow = 8; // 每排最大字母數
  const rowsData = [];
  for (let i = 0; i < answer.length; i += maxLettersPerRow) {
    rowsData.push(answer.substring(i, i + maxLettersPerRow));
  }

  // 2. 生成多排格子
  let globalInputIndex = 0; // 全局索引，用於定位所有輸入框
  rowsData.forEach((rowData, rowIndex) => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'letter-row';
    
    for (let j = 0; j < rowData.length; j++) {
      const input = document.createElement('input');
      input.type = "text";
      input.maxLength = 1;
      input.className = 'letter-box';
      input.dataset.row = rowIndex;
      input.dataset.index = globalInputIndex; // 使用全局索引，方便左右移動焦點
      
      input.addEventListener('input', (e) => {
          const val = e.target.value;
          const currentGlobalIdx = parseInt(e.target.dataset.index);
          const allInputs = Array.from(container.querySelectorAll('.letter-box'));
          
          if (val !== '' && allInputs[currentGlobalIdx + 1]) {
              allInputs[currentGlobalIdx + 1].focus(); // 自動移至全局下一個格子 (支援跨排)
          }
      });

      input.addEventListener('keydown', (e) => {
          const currentGlobalIdx = parseInt(e.target.dataset.index);
          const allInputs = Array.from(container.querySelectorAll('.letter-box'));

          if (e.key === 'Backspace' && e.target.value === '' && currentGlobalIdx > 0) {
              allInputs[currentGlobalIdx - 1].focus(); // 自動退回全局上一個格子 (支援跨排)
          }
          if (e.key === 'Enter' && checkBtn.style.display !== 'none') {
              checkBtn.click();
          }
      });

      rowDiv.appendChild(input);
      globalInputIndex++;
    }
    container.appendChild(rowDiv);
  });
  
  // 核心：頁面載入後自動聚焦第一個格子
  const firstInput = container.querySelector('.letter-box');
  if(firstInput) {
    firstInput.focus();
  }
}

checkBtn.addEventListener('click', () => {
  const currentData = wordDictionary[currentWordIndex];
  const answer = currentData.english.toLowerCase();
  const allInputs = Array.from(container.querySelectorAll('.letter-box'));
  let isAllCorrect = true;

  allInputs.forEach((input, idx) => {
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
