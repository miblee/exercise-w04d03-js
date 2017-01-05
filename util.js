function parseURL(str){
  var pathAndQuery = str.split('?');
  var queryRowAndCol = pathAndQuery[1].split('&');
  // console.log(pathAndQuery);
  // console.log(queryRowAndCol);
  var parsed = {};
  parsed.path = pathAndQuery[0];
  var row = queryRowAndCol[0].split('=');
  if (queryRowAndCol.includes('=')){
    col = queryRowAndCol[1].split('=');
  } else {
    col = null
  }
  parsed.query = {
    // row[0]: row[1],
    // col[0]: col[1]
  };
  parsed.query[row[0]] = row[1];
  parsed.query[col[0]] = col[1];
  console.log(parsed)
}



parseURL('/board?row=a&col=b')
parseURL('/pants?fabric=linen&nice=true')
parseURL('/sale?items=men#pants')

// module.exports = {
//   parseURL: parseURL,
//   toURL: toURL
// }
