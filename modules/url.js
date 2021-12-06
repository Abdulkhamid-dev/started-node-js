const url = require('url')

const newUrl = new URL('https://alitech.uz:3500/user/index.html?name=Anybody&id=5626162&age=22')


console.log(newUrl.href);

// PORT AND DOMEN HOST
console.log(newUrl.host);

// DOMEN HOST
console.log(newUrl.hostname);

// PATHNAME FILENAME and DIRNAME
console.log(newUrl.pathname);

// RETURN SEARCH 
console.log(newUrl.search);

// OBJECTED
console.log(newUrl.searchParams);

// ADD NEW PARAMS
newUrl.searchParams.append('username', 'somebody')

console.log(newUrl.searchParams);
console.log(newUrl.searchParams.forEach((value, name)=> {
console.log(`${name}: ${value}`);
}))

