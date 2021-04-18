const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');
const url = "https://jsonplaceholder.typicode.com/posts";

fs.mkdir('result', {recursive: true}, (err) => {if (err) throw err;})

fetch(url, {method:'GET',})
    .then(res => res.json())
    .then(data => {
        const posts = path.join(__dirname, "posts.json");
        fs.writeFile("./result/posts.json", JSON.stringify(data, null, 2), (err)=>console.log(err))
    })
    .catch(err => console.log(err));