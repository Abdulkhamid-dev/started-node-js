const path = require('path')

// console.log(path.basename(__dirname));

// console.log(path.win32.basename(__dirname));

// console.log(path.resolve('D:\\'));

// console.log(path.extname(__filename));
// The path.extname() method returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path.
//  If there is no . in the last portion of the path, or if there are no . characters other than the first character of the basename of path (see path.basename()) , an empty string is returned.


// const pathObj = path.parse(__dirname)
// console.log(pathObj);
// you can use all object choose methods
// The returned object will have the following properties:
// dir <string>
// root <string>
// base <string>
// name <string>
// ext <string>


//  PATH.JOIN(WILL BE ONLY STRING)

console.log(path.join(__filename));
// The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.