var utils = require('./utils.js');

// {
//   path: '/board',
//   query: {
//     row: 'a',
//     col: 'b'
//   }
// }


var url = '/board?row=a&col=b';

console.log( utils.parseUrl(url) )
