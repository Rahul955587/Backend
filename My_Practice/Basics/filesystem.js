const fs = require('fs');

// fs.readFile('file.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });
// console.log("Hi");
/*
output-
    Hi
    My name is Rahul
 */
//Because  readFile is a Asynchonous code so it not block the code.

// const ans = fs.readFileSync('file.txt','utf-8');//block next process
// console.log(ans);
// console.log("rahul");
/*
output-
    My name is Rahul
    rahul
 */
//Because  readFileSync is a Synchonous code so it  block the code.

// fs.writeFile('file2.txt', 'Hello', () => {
//     console.log("Sucess");
// });

// const w = fs.writeFileSync('file2.txt', "Hello Hii");
// console.log(w);
// console.log("h");


//append data at the end.
fs.appendFile('file.txt', '\nI am a Good Boy', () => {
    console.log("Append the given data");
});

//Unlink delete the file permanently.
fs.unlink('file3.txt', () => {
    console.log("Delete the file");
})

//rename the file
fs.rename('ind.js', 'index.js', () => {
    console.log("Rename the file");
})

//for check the file
if (fs.existsSync("file.txt")) {
  console.log("File exists");
}

//create folder
// fs.mkdir('Rahul', () => {
//     console.log("d");
// })

//delete the folder
fs.rmdir('rahul', () => {
    console.log("deleted");
});

// fs.writeFile('String.txt', "Rahul Raj", () => {
//     console.log("text file created");
// })

// fs.readFile('String.txt', 'utf-8', (err, data) => {
//     if (data) {
//         for (let ch of data) {
//             console.log(ch);
//         }
//     }
// });

fs.readFile('String.txt', 'utf-8', (err, data) => {
    if (data) {
        const line = data.split(" ");
        for (let str of line) {
            console.log(str);
        }
    }
})


