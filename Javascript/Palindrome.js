function checkpalindrome(name) {
  var arrName = name.split('');
  var revName = arrName.reverse();
  let rName = revName.join('');
  console.log(rName);
  if (rName == name) {
    console.log('It is a palindrome');
  } else {
    console.log('It is not a palindrome');
  }
}

var name = 'w';
checkpalindrome(name);