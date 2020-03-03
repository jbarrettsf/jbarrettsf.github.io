function charToAscii(i) {
  return i.charCodeAt(0)
}
function asciiToChar(chr) {
  return String.fromCharCode (chr)
}
function has(str,min,max) {
  for (let i=0; i<str.length; i=i+1) {
    let a=charToAscii(str.charAt(i))
    if(a>=min && a<=max) {
      return true
    }
  }
  return false
}
function hasLowerCase(str){
  return has(str,97,122)
}
function hasUpperCase(str){
  return has(str,65,90)
}
function hasNumber(str){
  return has(str,48,57)
}
function hasSymbol(str){
  return hasLowerCase(str) || hasUpperCase(str) || hasNumber(str)
}
function isValid(str){
  if (str.length<8){
    return false
  }
  else if (!hasLowerCase(str)){
    return false
  }
  else if (!hasUpperCase(str)){
    return false
  }
  else if(!hasNumber(str)){
    return false
  }
  else if(!hasSymbol(str)){
    return false
  }
  return true
}
function generate (){
  let s=[]
  for(let x=0; x<parseInt(Math.random() * 15 + 15); x=x+1) {
    let c = parseInt(Math.random()*4)
    if (c === 0) {
      s.push(asciiToChar(Math.random()*25+97))
    }
    else if (c === 1) {
      s.push(asciiToChar(Math.random()*25+65))
    }
    else if (c === 2) {
      s.push(asciiToChar(Math.random()*9+48))
    }
    else {
      let x = parseInt(Math.random()*4)
      if (x===0) {
        s.push(asciiToChar(Math.random()*14+33))
      }
      else if (x===1) {
        s.push(asciiToChar(Math.random()*5+91))
      }
      else if (x===2) {
        s.push(asciiToChar(Math.random()*3+123))
      }
      else {
        s.push(asciiToChar(Math.random()*6+58))
      }
    }
  }
  return s.join("")
}
function generatePassword(){
  while (true) {
    // let x = 1;
    // while(x < 10){
    let s=generate()
    if (isValid(s)) {
      return s
    }
    // x = x + 1
  }
}
function moo() {
    let pass=generatePassword()
    $("#password").text(pass)
}