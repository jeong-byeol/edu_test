// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elInputUsername = document.querySelector('#username'); 
let elFailureMessage = document.querySelector('.failure-message'); 
let elSuccessMessage = document.querySelector('.success-message'); 

let elInputpassword = document.querySelector('#password');
let elpasswordretype = document.querySelector('#password-retype');
let elmismatchMessage = document.querySelector('.mismatch-message');

elInputUsername.onkeyup = function () {
	if (isMoreThan4Length(elInputUsername.value)) {
		  // 아이디의 길이가 4와 같거나 길면 성공
		  elSuccessMessage.classList.remove('hide'); 
		  elFailureMessage.classList.add('hide');
	 } else { 
	  	// 아이디의 길이가 4보다 짧으면 실패
		  elSuccessMessage.classList.add('hide'); 
		  elFailureMessage.classList.remove('hide');
	 } 
}; 

function isMoreThan4Length(value) {
  return value.length >= 4;
}

//---------

elpasswordretype.onkeyup = function() {
  isMatch(elInputpassword.value, elpasswordretype.value);
};

function isMatch(password1, password2) {
  if(password1 !== password2) {
    elmismatchMessage.classList.remove('hide');
    return false;
  } else {
    elmismatchMessage.classList.add('hide');
    return true;
  }
}


  


