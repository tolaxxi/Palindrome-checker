const outputMsg = document.querySelector('#output');
const button = document.querySelector('#check-btn');
const input = document.querySelector('#input');

button.addEventListener('click', () => {
  const word = input.value;
  isPalindrome(word);

  input.addEventListener('input', () => {
    outputMsg.innerText = '';
  });
});

function isPalindrome(str) {
  if (str !== '' && str.trim().length >= 2) {
    const reverseString = [...str].reverse().join('');

    if (reverseString === str) {
      outputMsg.innerText = `${str} is a palindrome`;
      outputMsg.classList.remove('notPalindrome');
      outputMsg.classList.add('isPalindrome');
    } else {
      outputMsg.innerText = `${str} is a not palindrome`;
      outputMsg.classList.remove('isPalindrome');
      outputMsg.classList.add('notPalindrome');
    }
  } else {
    outputMsg.classList.add('err');
    outputMsg.innerText = 'please input a word at least two characters long';
  }
}
