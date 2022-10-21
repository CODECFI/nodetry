

const fsPromises = require('fs').promises;
const path = require('path')

const fileOps = async () => {
  try{
const data = await fsPromises.readFile(path.join(__dirname, 'start.txt'), 'utf8');
console.log(data);
await fsPromises.writeFile(path.join(__dirname, 'promiseWrite.txt'), data);
await fsPromises.appendFile(path.join(__dirname, 'promisewrite.txt'), '\n\n Nice to see you working')
await fsPromises.rename(path.join(__dirname, 'promiseWrite.txt'),path.join(__dirname, 'promiseComplete.txt'))
const Datanew = await fsPromises.readFile(path.join(__dirname, 'promiseComplete.txt'), 'utf8');
console.log(Datanew)
}catch (err){
    console.error(err)
  }
}
fileOps();



// fs.readFile(path.join(__dirname, 'start.txt'), 'utf8',(err, data) => {
//     if(err) throw err;
//     console.log(data)
// })



// process.on('Unknown', err => {
//   console.error(`Its kind a unexpected : like ${err}`);
//   process.exit(1);
// })
// console.log(' GOing good')

// fs.writeFile(path.join(__dirname, 'try.txt'),'Nice to see you working', (err) => {
//   if (err) throw err;
//   console.log('write complete')

  
// fs.appendFile(path.join(__dirname, 'try.txt'), '\n\nTesting text', (err) => {
//   if (err) throw err;
//   console.log('append complete')
// })

// } )























