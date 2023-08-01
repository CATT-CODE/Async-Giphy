require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

async function getImage(query){
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=1&offset=0&rating=g&lang=en`;
const get = await fetch(endpoint);
 const data = await get.json();
//  console.log(data);
 let url = data.data[0].url;
 console.log(url);
 return url


}

async function randomGif(query) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
    const get = await fetch(endpoint);
    const data = await get.json(); 
    let url = data.data[Math.floor(Math.random() * 25)].url;
    console.log(url);
    return url
}

async function helperFunction() {
    await randomGif("dogs")
}

 function getArray() {
    let gifArr = []
    for(let i = 0; i < 25; i++) {
         gifArr.push(helperFunction())
    }
    return gifArr
}

getArray();