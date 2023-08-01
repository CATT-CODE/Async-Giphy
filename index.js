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


}

getImage('cat');