let path = require("path");

// for(let i = 0; i<=10;i++){
//     let dirPathToMake = `Lecture -${i}`;
//     fs.mkdirSync(dirPathToMake);
//     fs.writeFileSync(path.join(dirPathToMake , "readme.md"), `#readme for ${dirPathToMake}` )
// }

let ext = path.extname(path.join(__dirname,"abc.js"));
console.log("ext",ext);

let name = path.basename(__dirname);
console.log(name);
let fileName = path.basename(path.join(__dirname,"abc.js"));
console.log(fileName);



