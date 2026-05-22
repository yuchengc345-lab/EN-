// ==========================================
// 📁 模拟你的“独立题库文件” (Data)
// 以后你只需要维护这个列表，底下的代码不用管
// ==========================================
const wordDictionary = [
  { chinese: "苹果", english: "apple" },
  { chinese: "香蕉", english: "banana" },
  { chinese: "奇妙的；极好的", english: "wonderful" }
];


// ==========================================
// ⚙️ 核心运行逻辑 (Logic)
// ==========================================

let currentWordIndex = 0; // 记录当前正在背第几个词
const container = document.getElementById('inputContainer');
const hintElement = document.getElementById('chineseHint');
const msgElement = document.getElementById('successMessage');

// 核心函数：加载题目
function loadQuestion(index) {
  // 清空上一个题目的内容
  container.innerHTML = '';
  msgElement.innerText = '';
  
  // 获取当前的中文和英文数据
  const currentData = wordDictionary[index];
  const answer = currentData.english.toLowerCase();
  
  // 更新界面的中文提示
  hintElement.innerText = currentData.chinese;

  // 根据英文单词的长度，动态生成输入框
  for (let i = 0; i < answer.length; i++) {
      const input = document.createElement('input');
      input.type = "text";
      input.maxLength = 1;
      input.className = 'letter-box';
      input.dataset.index = i; 
      
      // 监听用户的每一次键盘输入
      input.addEventListener('input', (e) => {
          const val = e.target.value.toLowerCase();
          const idx = parseInt(e.target.dataset.index);

          // 校验对错
          if (val === answer[idx]) {
              e.target.className = 'letter-box correct';
              
              // 自动跳到下一个格子
              if (container.children[idx + 1]) {
                  container.children[idx + 1].focus();
              } else {
                  // 如果没有下一个格子了，说明这个单词拼完了！
                  checkWordComplete(answer);
              }
          } else {
              e.target.className = 'letter-box wrong';
              // 小细节：如果输错了，自动清空，强迫用户重新输入这个字母
              setTimeout(() => { e.target.value = ''; }, 200);
          }
      });
      container.appendChild(input);
  }
  
  // 题目加载后，自动聚焦到第一个框
  if(container.children.length > 0) {
      container.children[0].focus();
  }
}

// 检查整个单词是否拼写完成
function checkWordComplete(answer) {
  // 检查所有框是不是都被填满了且填对了（带有 correct class）
  const allInputs = Array.from(container.children);
  const isAllCorrect = allInputs.every(input => input.classList.contains('correct'));

  if (isAllCorrect) {
      msgElement.innerText = "🎉 拼写正确！1秒后进入下一题...";
      
      // 延迟1秒后，加载下一个单词
      setTimeout(() => {
          currentWordIndex++;
          // 如果词库背完了，循环回第一个
          if (currentWordIndex >= wordDictionary.length) {
              currentWordIndex = 0; 
              alert("恭喜你，所有单词已完成！重新开始。");
          }
          loadQuestion(currentWordIndex);
      }, 1000);
  }
}

// 页面一加载，马上执行第一题
loadQuestion(currentWordIndex);
