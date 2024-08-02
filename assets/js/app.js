import searchImages from './search.js';
import populateLabels from './labels.js';
import { getCookie } from './cookies.js';

populateLabels();

document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.querySelector("#search").value;
    await searchImages(query);
});

(async() => {
    const query = getCookie();
    await searchImages(query);
})();