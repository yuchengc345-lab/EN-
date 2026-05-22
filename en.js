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

// 🌟 核心修改：初始化選單，並加入「分類群組 (optgroup)」
function initSelect() {
  let currentCategory = "";
  let optgroup = null;
  let groupCounter = 1; // 用來計算在這個分類底下是第幾組

  wordGroups.forEach((group, index) => {
    // 當遇到新的分類時，建立一個粗體的大標題群組
    if (group.category !== currentCategory) {
      currentCategory = group.category;
      groupCounter = 1; // 換新分類時，組數從 1 開始重新算
      
      optgroup = document.createElement('optgroup');
      optgroup.label = `📚 ${currentCategory}`; // 顯示為 📚 三年內外英文 等
      groupSelect.appendChild(optgroup);
    }

    const option = document.createElement('option');
    option.value = index;
    
    // 動態計算這組的單字範圍 (1-10, 11-20...)
    const startNum = (groupCounter - 1) * 10 + 1;
    const endNum = (groupCounter - 1) * 10 + group.words.length;
    
    // 設定顯示格式，例如：第 1 組 (1-10)：心血管系統 1
    option.innerText = `第 ${groupCounter} 組 (${startNum}-${endNum})：${group.groupName}`;
    
    optgroup.appendChild(option);
    groupCounter++;
  });
}

groupSelect.addEventListener('change', (e) => {
  currentGroupIndex = parseInt(e.target.value);
  wordDictionary = wordGroups[currentGroupIndex].words;
  currentWordIndex = 0; 
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
  hintElement.innerText = currentData.chinese;

  const input = document.createElement('input');
  input.type = "text";
  input.className = 'word-input';
  input.placeholder = "請輸入英文..."; 
  input.autocomplete = "off"; 
  input.spellcheck = false; 
  
  input.addEventListener('input', () => {
      if (input.classList.contains('wrong')) {
          input.classList.remove('wrong'); 
          msgElement.innerText = ''; 
          correctAnswerMsg.innerText = ''; 
      }
  });

  input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && checkBtn.style.display !== 'none') {
          checkBtn.click();
      }
  });

  container.appendChild(input);
  
  setTimeout(() => input.focus(), 10);
}

checkBtn.addEventListener('click', () => {
  const currentData = wordDictionary[currentWordIndex];
  const answer = currentData.english.toLowerCase();
  const input = container.querySelector('.word-input');
  const userInput = input.value.trim().toLowerCase();

  let isCorrect = (userInput === answer);

  if (isCorrect) {
      input.className = 'word-input correct';
      msgElement.innerText = "🎉 完全正確！";
      msgElement.className = "success-msg correct-text";
      input.disabled = true; 
      checkBtn.style.display = 'none';
  } else {
      input.className = 'word-input wrong';
      msgElement.innerText = "❌ 拼錯囉！直接打字覆蓋，然後按 Enter 再試一次吧！";
      msgElement.className = "success-msg wrong-text";
      correctAnswerMsg.innerHTML = `正確答案是：<span style="color:#4caf50;">${answer}</span>`;
      input.select(); 
  }
});

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

// 初始化
initSelect();
loadQuestion(currentWordIndex);
