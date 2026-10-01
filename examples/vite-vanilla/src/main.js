// Pulls in the generated CSS (served from memory in dev, emitted as an asset in build).
import 'virtual:senangstart.css';
// Your own CSS can live alongside it.
import './style.css';

const app = document.querySelector('#app');
let count = 0;

// Attributes inside markup in JS template literals are scanned (content: ./src/**/*.js).
app.innerHTML = `
  <span layout="flex center" space="p:small" visual="rounded:small bg:white">Ready</span>
  <button space="p-x:medium p-y:small" visual="bg:brand text:white rounded:medium hover:bg:primary">
    Clicked 0 times
  </button>
`;

// Plain strings passed to setAttribute() are NOT scanned. Declare such tokens
// with a hint comment (or the config safelist) so they are generated:
// senang: visual="shadow:medium"
const button = app.querySelector('button');
button.addEventListener('click', () => {
  count++;
  button.textContent = `Clicked ${count} times`;
  button.setAttribute('visual', 'bg:brand text:white rounded:medium hover:bg:primary shadow:medium');
});
