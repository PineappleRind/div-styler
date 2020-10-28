

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomContent() {
  var letters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';
  var content = '';
  for (var i = 0; i < getRandomInt(5, 10); i++) {
    content += letters[Math.floor(Math.random() * 62)];
  }
  return content;
}

function random() {
  let div = document.getElementById("div");

  let divHeight = document.getElementById("height");
  let divWidth = document.getElementById("width");
  let divBorderRadius = document.getElementById("borderRadius");
  let divBgColor = document.getElementById("color");
  let divBorderThickness = document.getElementById("borderThickness");
  let divBorderColor = document.getElementById("borderColor");
  let divFontSize = document.getElementById('fontSize');
  let divFontColor = document.getElementById("fontColor");
  let borderStyles = ['solid', 'dotted', 'double', 'dashed'];

  let fontFamilies = ['Georgia, serif', ' Times New Roman, serif', 'Helvetica, sans-serif', 'Zapfino, cursive', 'Noto Sans JP, sans-serif', 'Comic Sans MS, cursive', 'Verdana, sans-serif', 'Courier, monospace', 'Grandstander, sans-serif']

  divHeight.value = getRandomInt(10,101)
  divWidth.value = getRandomInt(30,101)
  divBorderRadius.value = Math.floor(Math.random() * 101);
  divBgColor.value = getRandomColor();
  divBorderThickness.value = Math.floor(Math.random() * 101);
  divBorderColor.value = getRandomColor();
  div.style.borderStyle = borderStyles[borderStyles.length * Math.random() | 0];
  div.style.fontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
  divFontSize.value = getRandomInt(35, 90);
  divFontColor.value = getRandomColor();

  if (divFontColor.value === divBgColor.value) {
      divFontColor.value = getRandomColor();
  }

  let randomContent = document.getElementById('randomContent');
  let randomWord = document.getElementById('randomWord');
  let errorMessage = document.getElementById('randomErrorMessage');

  if (randomContent.checked === true && randomWord.checked === false) {
      div.innerHTML = getRandomContent();
      errorMessage.style.display = 'none';
  } else if (randomWord.checked === true && randomContent.checked === false) {
      div.innerHTML = getRandomWord();
      errorMessage.style.display = 'none';
  } else if (randomWord.checked === false && randomContent.checked === false) {
      div.innerHTML = '';
      errorMessage.style.display = 'none';
  } else {
       errorMessage.style.display = 'block';
       div.innerHTML = '';
  }
}

function getRandomWord() {
  let words = [
  'grape', 'pitch', 'judgement',
  'toll','gain','brag',
  'committee','tap','jam',
  'information','break','discovery',
  'mosquito','tempt','mountain',
  'south','west','north',
  'south','inside','salt',
  'pepper','pest','establish',
  'if','harmony','prevalence',
  'dog','ideal','battery',
  'shy','addicted','bottom',
  'top','left','ball',
  'right','jail','convict',
  'hear','vague','order',
  'embrace','seed','award',
  'indulge','count','speed',
  'grass','camp','legislation',
  'trick','hallway','breathe',
  'reservoir','cylinder','improvement',
  'the','liquid','solution',
  'begins','to','decrease',
  'traffic','replacement','ban',
  'dozen','into','a',
  'bug','mouth','cherry',
  'tree','document','hiccup',
  'girl'];
  var word = '';
    word += words[Math.floor(Math.random() * words.length)];
  return word;
}