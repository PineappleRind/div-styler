function getRandomInt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function getRandomContent(){for(var e="",t=0;t<getRandomInt(5,10);t++)e+="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890"[Math.floor(62*Math.random())];return e}function random(){let e=document.getElementById("div"),t=document.getElementById("height"),n=document.getElementById("width"),o=document.getElementById("borderRadius"),d=document.getElementById("color"),a=document.getElementById("borderThickness"),r=document.getElementById("borderColor"),l=document.getElementById("fontSize"),m=document.getElementById("fontColor"),s=["solid","dotted","double","dashed"],c=["Georgia, serif"," Times New Roman, serif","Helvetica, sans-serif","Zapfino, cursive","Noto Sans JP, sans-serif","Comic Sans MS, cursive","Verdana, sans-serif","Courier, monospace","Grandstander, sans-serif"];t.value=getRandomInt(10,101),n.value=getRandomInt(30,101),o.value=Math.floor(101*Math.random()),d.value=getRandomColor(),a.value=Math.floor(101*Math.random()),r.value=getRandomColor(),e.style.borderStyle=s[s.length*Math.random()|0],e.style.fontFamily=c[Math.floor(Math.random()*c.length)],l.value=getRandomInt(35,90),m.value=getRandomColor(),m.value===d.value&&(m.value=getRandomColor());let i=document.getElementById("randomContent"),u=document.getElementById("randomWord"),g=document.getElementById("randomErrorMessage");!0===i.checked&&!1===u.checked?(e.innerHTML=getRandomContent(),g.style.display="none"):!0===u.checked&&!1===i.checked?(e.innerHTML=getRandomWord(),g.style.display="none"):!1===u.checked&&!1===i.checked?(e.innerHTML="",g.style.display="none"):(g.style.display="block",e.innerHTML="")}
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
  'girl','chosen','sphinx',
  'fire','robot', 'lemon',
  'sugar','tea','graveyard',
  'video','shop','honey',
  'apple','all','who',
  'materials','resize','job',
  'agreed', 'demand','woman',,
  'falls','tool','problems',
  'position','absolute','task',
  'superiors','done','insidious',
  'cup','there','integrations'];
  var word = '';
    word += words[Math.floor(Math.random() * words.length)];
  return word;
}