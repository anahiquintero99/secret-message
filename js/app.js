//DOM Elements
const messageTextArea = document.querySelector('#message');
const encodedMessageParagragh = document.querySelector('#encoded-message');

//Fucntion
const encodeMessage = () => {
  const START_INDEX = 32;
  const END_INDEX = 126;
  const CESAR_CIPHER_POSITIONS = 10;

  const message = messageTextArea.value;
  const encodedMessage = message
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt();

      //covert 'enter' into break line HTML
      if (charCode === 10) return '<br>';

      let newCharCode = charCode + CESAR_CIPHER_POSITIONS;
      if (newCharCode > END_INDEX) {
        newCharCode = newCharCode - END_INDEX + START_INDEX - 1;
      }
      return String.fromCharCode(newCharCode);
    })
    .join('');

  encodedMessageParagragh.innerHTML = '';
  encodedMessageParagragh.insertAdjacentHTML('beforeend', encodedMessage);
};

//Events
messageTextArea.addEventListener('keyup', encodeMessage);
