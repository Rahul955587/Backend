const path = require("path");

console.log(path.basename('C:\\temp\\myfile.html'));//for searching html file

console.log(path.parse('/home/user/dir/file.txt'));

console.log(path.basename("d:/Backend/My_Practice/Basics/pathmodule.js"));
console.log(path.dirname("d:/Backend/My_Practice/Basics/pathmodule.js"));
console.log(path.extname('pathmodule.js'));
console.log(path.join('my_practice', 'basics', 'pathmodule.js'));
console.log(path.resolve('basics', 'pathmodule.js'));
console.log(path.isAbsolute("D:\Backend\My_Practice\Basics\basics\pathmodule.js"));
console.log(path.parse("/home/user/app.js"));
