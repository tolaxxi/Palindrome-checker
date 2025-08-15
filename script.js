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
  const reverseString = [...str].reverse().join('');

  if (reverseString === str) {
    outputMsg.innerText = `${str} is a palindrome`;
    outputMsg.classList.add('isPalindrome');
    outputMsg.classList.remove('notPalindrome');
  } else {
    outputMsg.innerText = `${str} is a not palindrome`;
    outputMsg.classList.remove('isPalindrome');
    outputMsg.classList.add('notPalindrome');
  }
}
