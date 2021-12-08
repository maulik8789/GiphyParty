console.log("Let's get this party started!");
// let APIKey = 'aHW0Tkolc9Tm8gqkrwiRtw2X3f36HEQZ'
// let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=`;

let mainForm = document.querySelector('#mainForm');
let typeGif = document.querySelector('#typeGif');
let goGif = document.querySelector('#goGif');
goGif.addEventListener('click', function(e) {
    e.preventDefault();
    getGif();
});

async function getGif() {
    let APIKey = 'aHW0Tkolc9Tm8gqkrwiRtw2X3f36HEQZ'
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=`;
    let search = typeGif.value;
    url = url.concat(search);
    let res = await axios.get(url);
    let newGif = document.createElement('img');
    console.log(res.data);
    newGif.src = res.data.data[0].images.downsized.url;
    mainForm.append(newGif);

}
