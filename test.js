// const Name = 'Favour';
// console.log(Name);

const fs = require('fs');

const writeFile = fs.writeFile('./os/os.js', "const os = require('os');\nconsole.log(os.platform(), os.freemem())",(err)=> {
    if (err){
        console.log(err)
    }
    console.log('completed!')
})


if (!fs.existsSync('./os')){
fs.mkdir('./os', (err)=> {
    if (err) {
        console.log(err)
    }
    console.log('Folder created!')
})
}

fs.readFile('./os/os.js', (err,data)=> {
    if (err){
        console.log(err)
    }
    console.log(data.toString())
})
