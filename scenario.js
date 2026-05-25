// 🌟 核心修改：只過濾出 "三年內外英文" 的題庫
const filteredWordGroups = wordGroups.filter(group => group.category === "三年內外英文");

let currentGroupIndex = 0; 
let currentWordIndex = 0;  
let wordDictionary = filteredWordGroups[currentGroupIndex].words; 

const container = document.getElementById('inputContainer');
const hintElement = document.getElementById('chineseHint');
const msgElement = document.getElementById('successMessage');
const checkBtn = document.getElementById('checkBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressText = document.getElementById('progressText');
const correctAnswerMsg = document.getElementById('correctAnswerMsg');
const groupSelect = document.getElementById('groupSelect');
const speakBtn = document.getElementById('speakBtn'); 

function speakWord(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; 
    utterance.rate = 0.85;    
    window.speechSynthesis.speak(utterance);
  }
}

function initSelect() {
  let groupCounter = 1; 
  filteredWordGroups.forEach((group, index) => {
    const option = document.createElement('option');
    option.value = index;
    const startNum = (groupCounter - 1) * 10 + 1;
    const endNum = (groupCounter - 1) * 10 + group.words.length;
    option.innerText = `第 ${groupCounter} 組 (${startNum}-${endNum})：${group.groupName}`;
    groupSelect.appendChild(option);
    groupCounter++;
  });
}

groupSelect.addEventListener('change', (e) => {
  currentGroupIndex = parseInt(e.target.value);
  wordDictionary = filteredWordGroups[currentGroupIndex].words;
  currentWordIndex = 0; 
  loadQuestion(currentWordIndex);
});

function loadQuestion(index) {
  container.innerHTML = '';
  msgElement.innerText = '';
  correctAnswerMsg.innerText = ''; 
  checkBtn.style.display = 'inline-block';

  progressText.innerText = `第 ${index + 1} 題 / 共 ${wordDictionary.length} 題`;
  const currentData = wordDictionary[index];
  
  // 顯示情境。如果該單字尚未設定情境，則退回顯示中文。
  const scenarioText = currentData.scenario || `(尚未建立情境題，請直接翻譯：${currentData.chinese})`;
  hintElement.innerHTML = `<span style="color:#333;">${scenarioText}</span>`;

  const input = document.createElement('input');
  input.type = "text";
  input.className = 'word-input';
  input.placeholder = "請輸入對應的醫學英文..."; 
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

speakBtn.addEventListener('click', () => {
  const currentData = wordDictionary[currentWordIndex];
  speakWord(currentData.english);
  const input = container.querySelector('.word-input');
  if(input) input.focus();
});

// 超智慧寬容比對引擎
checkBtn.addEventListener('click', () => {
  const currentData = wordDictionary[currentWordIndex];
  const rawAnswer = currentData.english;
  const input = container.querySelector('.word-input');
  const userInput = input.value;

  const possibleAnswers = rawAnswer.split(/[,;(]/);
  const cleanText = (text) => text.replace(/[\s\.\/\-\)]/g, '').toLowerCase();
  const cleanInput = cleanText(userInput);

  let isCorrect = possibleAnswers.some(part => {
      const cleanPart = cleanText(part);
      return cleanPart !== '' && cleanPart === cleanInput;
  });

  if (isCorrect) {
      input.className = 'word-input correct';
      msgElement.innerText = "🎉 判斷正確！";
      msgElement.className = "success-msg correct-text";
      input.disabled = true; 
      checkBtn.style.display = 'none';
  } else {
      input.className = 'word-input wrong';
      msgElement.innerText = "❌ 判斷錯誤！直接打字覆蓋重試吧！";
      msgElement.className = "success-msg wrong-text";
      correctAnswerMsg.innerHTML = `答案是：<span style="color:#4caf50;">${rawAnswer}</span> <br><span style="font-size: 14px; color: #666;">(中文：${currentData.chinese})</span>`;
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

initSelect();
loadQuestion(currentWordIndex);
