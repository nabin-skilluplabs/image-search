
import searchImages from './search.js';
import populateLabels from './labels.js';


populateLabels();

document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const query = document.querySelector("#search").value;
    await searchImages(query);
});


(async () => {
    const cookie = document.cookie;
    const query = cookie.split("=")[1];
    console.log(query);
    await searchImages(query);
})()