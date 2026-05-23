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
const speakBtn = document.getElementById('speakBtn'); // 🌟 新增：綁定喇叭按鈕

// 🌟 核心新功能：瀏覽器語音合成發音
function speakWord(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // 停止上一句還沒唸完的發音
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // 設定為美式英文
    utterance.rate = 0.85;    // 語速調慢一點點 (0.85倍速)，適合學習
    window.speechSynthesis.speak(utterance);
  }
}

function initSelect() {
  let currentCategory = "";
  let optgroup = null;
  let groupCounter = 1; 

  wordGroups.forEach((group, index) => {
    if (group.category !== currentCategory) {
      currentCategory = group.category;
      groupCounter = 1; 
      optgroup = document.createElement('optgroup');
      optgroup.label = `📚 ${currentCategory}`; 
      groupSelect.appendChild(optgroup);
    }
    const option = document.createElement('option');
    option.value = index;
    const startNum = (groupCounter - 1) * 10 + 1;
    const endNum = (groupCounter - 1) * 10 + group.words.length;
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

// 🌟 新增：點擊喇叭按鈕時，重新唸一次單字
speakBtn.addEventListener('click', () => {
  const currentData = wordDictionary[currentWordIndex];
  speakWord(currentData.english);
  // 點擊完喇叭後，把焦點還給輸入框，方便繼續打字
  const input = container.querySelector('.word-input');
  if(input) input.focus();
});

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
