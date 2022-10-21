const fs = require('fs');


if(!fs.existsSync('./newsy')){ 
fs.mkdir('./newsy', (err) => {
    if(err) throw err;
    console.log('Directory created ')
});
}